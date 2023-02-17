import { store } from '../store';

export function createSearchBox(addressBox) {
    var searchOptions = {
        key: 'rFBdfrmDGxYGTYFyFgUSJwBNs9rGpctr',
        language: 'it-IT',
        limit: 5
    };

    var autocompleteOptions = {
        key: 'rFBdfrmDGxYGTYFyFgUSJwBNs9rGpctr',
        language: 'it-IT'
    };

    var searchBoxOptions = {
        minNumberOfCharacters: 0,
        searchOptions: searchOptions,
        autocompleteOptions: autocompleteOptions
    };

    var searchBox = new tt.plugins.SearchBox(tt.services, searchBoxOptions);

    var inputElement = searchBox.getSearchBoxHTML().querySelector('input');
    inputElement.addEventListener('input', function () {
        store.address = inputElement.value;
    });

    searchBox.on('tomtom.searchbox.resultselected', function (data) {
        store.address = data.data.text;
    });

    var searchBoxHTML = searchBox.getSearchBoxHTML();

    var closeIcon = searchBoxHTML.querySelector('.tt-search-box-close-icon');
    closeIcon.addEventListener('click', function () {
        store.address = '';
    });

    addressBox.append(searchBoxHTML);
}

