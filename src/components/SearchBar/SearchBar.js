import React, { Component } from 'react';
import SearchBarFacets from './SearchBarFacets/SearchBarFacets';
import SearchInput from './SearchInput/SearchInput';
 
class SearchBar extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="searchBar">
                <SearchInput></SearchInput>
                {/*<SearchBarFacets></SearchBarFacets>*/}
            </div>
        );
    }
}
 
export default SearchBar;  