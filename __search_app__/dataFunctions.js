
/* EXtracting the search actual search term from the input box */
export const getSearchTerm = () => {
    const rawSearchTerm = document.getElementById('search').value.trim();
    const regex = /[ ]{2,}/gi;
    /* This regex will look for more then 1 space because only one space is acceptable in words*/
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");
    return searchTerm;
}

export const retrieveSearchResults = async (searchTerm) => {
    const wikiSearchString = getWikiSearchString(searchTerm);
    const wikiSearchResults = await requestData(wikiSearchString);

    let resultArray = [];
    if (wikiSearchResults.hasOwnProperty('query')) {
        resultArray = processWikiResults(wikiSearchResults.query.pages);
    }
    return resultArray;
};

const getWikiSearchString = (searchTerm) => {
    const maxChar = getMaxChars();
    const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChar}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const searchString = encodeURI(rawSearchString);
    return searchString;
};

const getMaxChars = () => {
    /** 
     * Extracting the viewport width of screen and on the basis of that
     * assigning the maximum chracters so we should request from the wikipedia
     * as per our requirement :) 
     */
    const width = window.innerWidth || document.body.clientWidth;
    let maxChars;
    if (width < 414) maxChars = 65;
    else if (width >= 414 && width < 1400) maxChars = 100;
    else if (width >= 1400) maxChars = 130;

    return maxChars;
};

const requestData = async (searchString) => {
    try {
        const response = await fetch(searchString);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("Error while requesting Data : ", error);
    }
};

const processWikiResults = (results) => {
    const resultArray = [];
    /* console.log(results); */
    Object.keys(results).forEach((key) => {
        const id = key;
        const title = results[key].title;
        const text = results[key].extract;
        const img = results[key].hasOwnProperty('thumbnail') ? results[key].thumbnail.source : null;

        /* Building the actual array passing onto the resultant array */
        const item = {
            id: id,
            title: title,
            text: text,
            img: img
        }; resultArray.push(item);

        /* console.log(item); */
    })
    return resultArray;
};