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

    searchBox.on('tomtom.searchbox.resultselected', function (data) {
        store.address = data.data.text;
        console.log(store.address);
    });

    var searchBoxHTML = searchBox.getSearchBoxHTML();

    addressBox.append(searchBoxHTML);
}

