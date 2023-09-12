
(function () {
    console.log("Javascript File loaded successfully");
})()

// Utilities function to get DOM element from string 
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

let parameter = document.getElementById('parameter-box');
parameter.style.display = 'none';

// Standard method
let custom = document.getElementById('custom');
custom.addEventListener('click', () => {
    document.getElementById('parameter-box').style.display = 'block';
    document.getElementById('requestJSONBOX').style.display = 'none';
})

// Jquery method :)
$("#JSON").change(function () {
    $('#parameter-box').hide();
    $('#requestJSONBOX').show();

})

// Adding more paramters if the user wants to add more paramters
let paragrams_count = 0; // initializing the number of paragrams pre exists in page
let add = document.getElementById('addParamters');
add.addEventListener('click', () => {

    let string = `<div id="parameter-box">
                    <div class="form-row my-2">
                        <label for="url" class="col-sm-2 col-form-label">Parameter ${paragrams_count + 2}</label>
                        <div class="col-md-4">

                            <input type="text" class="form-control" id="parameterkey${paragrams_count + 2}" placeholder="Enter Parameter ${paragrams_count + 2} key">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="parametervalue${paragrams_count + 2}"
                                placeholder="Enter Parameter ${paragrams_count + 2} Value">
                        </div>
                        <button class="btn btn-primary deleteParam"> - </button>
                    </div>`;

    paragrams_count += 1;

    //converting the element string to DOM node
    let paramElement = getElementFromString(string);
    /* console.log(paramElement); */
    let params = document.getElementById('params'); // The container which holds new parameters
    params.appendChild(paramElement);

    // Assigning the removal functionality to '-' button of the added parameters
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam)
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })

})

//================================ Making Request Javascript code ========================================//

document.getElementById('submit').addEventListener('click', () => {

    document.getElementById('responsePrism').innerHTML = "Please wait... Data is Fetching :)";

    // Fetch all the value user has entered
    let url = document.getElementById('url').value;
    let request_type = document.querySelector("input[name = 'request_type']:checked").value;
    let content_type = document.querySelector("input[name = 'content_type']:checked").value;

    // Depending upon the user selection we have to choose the operation
    var data;
    if (content_type == 'custom') {
        data = {};
        for (let i = 0; i < paragrams_count + 1; ++i) {
            let keyElement = document.getElementById('parameterkey' + (i + 1));
            let valueElement = document.getElementById('parametervalue' + (i + 1));

            if (keyElement != undefined) {
                let key = keyElement.value;
                let value = valueElement.value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    } else {
        data = document.getElementById('JSONTextarea').value;
        try {
            data = JSON.parse(data); // Parse JSON if content_type is not 'custom'
        } catch (error) {
            console.error('Invalid JSON data:', error);
        }
    }

    console.log(data);

    //  Dependin upon the call type we are mading the request using fetch
    if (request_type === 'GET') {
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.text())
            .then((text) => {
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            })
            .catch(error => {
                console.error('GET request error:', error);
            });
    } else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                document.getElementById('responsePrism').innerHTML = JSON.stringify(json);
                Prism.highlightAll();
            })
            .catch(error => {
                console.error('POST request error:', error);
            });
    }



})




/*
var xhr = new XMLHttpRequest();
    xhr.open(request_type, url, true);

    xhr.onload = function () {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);
            $('#responseJSONBOXtext').text(data);
        }
    }
    xhr.send();
 */








