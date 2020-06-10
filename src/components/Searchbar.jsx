import React, { Component } from 'react';
import './box.css'

const SearchBar = ({term, updateSearch}) => {
    return ( 
        <div className="flex-search">

        <input
        className="centerbar"
        type="text"
        value={term}
        onChange={updateSearch}
        placeholder="Type the information"
        >
        </input>

        </div>
     );
}
 
export default SearchBar;