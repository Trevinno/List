import React, { Component } from 'react';
import {getTags} from '../mockDatabase/database.js'

const Tags = () => {

    const arr = getTags();
    return (
        <div className="container">
        <p>
        {arr.map( e => {
            return `${e} `
        })}
        </p>
        </div>

      );
}
 
export default Tags;