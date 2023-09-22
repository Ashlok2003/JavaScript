
export const deleteSearchContent = () => {
    /* Deleting all the sub childs present inside the searchresults section */
    const parentElement = document.getElementById('searchResults');

    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};


export const BuildSearchResults = (resultArray) => {
    resultArray.forEach((result) => {
        const resultItem = createResultItem(result);

        const resultContent = document.createElement('div');
        resultContent.classList.add("resultContent"); /* Adding the class */

        /* If the information response have image then adding up else excluding it */
        if (result.img) {
            const resultImage = createResultImage(result);
            /* Adding image into resultContent class */
            resultContent.append(resultImage);
        }

        /* Adding the respose text into resultContent class */
        const resultText = createResultText(result);
        resultContent.append(resultText);

        /* Finally appending the resultContents into its higher hireachy parent class i.e. resultItems */
        resultItem.append(resultContent);

        const searchResults = document.getElementById('searchResults');

        /* Finally adding the formed resultant section into the searchresult sections :) */
        searchResults.append(resultItem);
    })
};

const createResultItem = (result) => {

    const resultItem = document.createElement('div');
    resultItem.classList.add('resultItem'); /* Adding the class */

    const resultTitle = document.createElement('div');
    resultTitle.classList.add('resultTitle');

    const link = document.createElement('a');
    link.setAttribute('href', `http://en.wikipedia.org/?curid=${result.id}`);
    link.textContent = result.title;
    link.target = '_blank';

    resultTitle.append(link);
    resultItem.append(resultTitle);

    return resultItem;
};
const createResultImage = (result) => {
    const resultImage = document.createElement('div');
    resultImage.classList.add('resultImage');

    const img = document.createElement('img');
    img.setAttribute('src', `${result.img}`);
    img.setAttribute('alt', `${result.title}`);

    resultImage.append(img);

    return resultImage;
};
const createResultText = (result) => {
    const resultText = document.createElement('div');
    resultText.classList.add('resultText');

    const p = document.createElement('p');
    p.classList.add('resultDescription');
    p.innerHTML = `${result.text}`;

    resultText.append(p);
    return resultText;
};

export const clearStatsLine = () => {
    document.getElementById('stats').textContent = "";
};

export const setStatsLine = (numberofResults) => {
    const setStatsLine = document.getElementById('stats');
    if (numberofResults) {
        setStatsLine.textContent = `Displaying ${numberofResults} results`;
    } else {
        setStatsLine.textContent = "Sorry, No Results !";
    }
};

