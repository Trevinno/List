import React, { Component } from 'react';
// import {getTags} from '../mockDatabase/database.js'

const Tags = ({solution, database}) => {

    const arr = solution(database)
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