import React, { Component } from 'react'
import './box.css'


const Box = ({database, year, month, tags }) => {
    return (  
    <div>
    <center className="center">
    <h1>{database.name}</h1>
    <p>Description {database.desc}</p>
    <p>URL {database.url}</p>
    <p>Year added {year}</p>
    <p>Month added {month}</p>
    <p>
    {tags.map(tag => (
        `${tag}  `
    ))}
    </p>
    </center>
    </div>
    );
}
 
export default Box;