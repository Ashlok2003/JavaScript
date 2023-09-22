import { clearSeachText, setSearchFocus, showClearTextButton, clearPushListener } from "./searchBar.js";
import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js";
import { deleteSearchContent, BuildSearchResults, clearStatsLine, setStatsLine } from "./searchResults.js";

document.addEventListener('readystatechange', (event) => {
    // Since when our page completely loaded then
    if (event.target.readyState === 'complete')
        initApp();
});

const initApp = () => {
    /* set the focus */
    setSearchFocus();

    /* 3 listeners clear text */
    const search = document.getElementById('search');
    search.addEventListener('input', showClearTextButton);

    const clear = document.getElementById('clear');
    clear.addEventListener('click', clearSeachText);
    clear.addEventListener('keydown', clearPushListener);

    const form = document.getElementById('searchBar');
    form.addEventListener('submit', submitTheSearch);
}


// Procedural 'workflow' function
const submitTheSearch = (event) => {
    event.preventDefault(); /* Handling the default reloading state of page */

    /* Deleting the search results if previous exists */
    deleteSearchContent();

    processTheSearch();
    setSearchFocus();
};


// Processing module :)

const processTheSearch = async () => {
    /* clear the stats line */
    clearStatsLine();

    const searchTerm = getSearchTerm();
    if (searchTerm === " ") return;

    const resultArray = await retrieveSearchResults(searchTerm);

    if (resultArray.length) {
        /* Building search Results as per our received resonses */
        BuildSearchResults(resultArray);
    }

    /* Setting the stats line now :) */
    setStatsLine(resultArray.length);
}