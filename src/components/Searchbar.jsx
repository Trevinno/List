import React, { Component } from 'react';
import './box.css'

const SearchBar = ({term, updateSearch}) => {
    return ( 
        <div className="flex-search">

        <input
        className="centerbar button raise"
        type="text"
        value={term}
        onChange={updateSearch}
        placeholder="Search..."
        >
        </input>

        </div>
     );
}
 
export default SearchBar;