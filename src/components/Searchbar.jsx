import React, { Component } from 'react';
import './box.css'

const SearchBar = ({term, updateSearch}) => {
    return ( 
        <div>

        <input
        className="centerbar"
        type="text"
        value={term}
        onChange={updateSearch}
        >


        </input>

        </div>
     );
}
 
export default SearchBar;