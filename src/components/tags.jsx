import React, { Component } from 'react';
import {getTags} from '../mockDatabase/database.js'

const Tags = ({solution, database}) => {

    const arr = getTags();

    const arr2 = solution(database)
    return (
        <div className="container">
        <p>
        {arr2.map( e => {
            return `${e} `
        })}
        </p>
        </div>

      );
}
 
export default Tags;