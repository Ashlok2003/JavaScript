const url = 'https://covid19-data.p.rapidapi.com/geojson-in';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '04e8fb8596msh216827cf45baa0cp1a8315jsnc776094c49a4',
        'X-RapidAPI-Host': 'covid19-data.p.rapidapi.com'
    }
};



async function fetchData() {

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);

    }
}
fetchData();