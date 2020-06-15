import React, { Component } from 'react'
import './box.css'


const Box = ({database, year, month, tags }) => {
    return (  
    <div className="card card-5 fontChivo">
    <center className="center">
    <h1 className='headerFont'>{database.name}</h1>
    <div className='fontSize'>
    <p>Description {database.desc}</p>
    <p>URL {database.url}</p>
    <p>Year added {year}</p>
    <p>Month added {month}</p>
    <p>
    {tags.map(tag => (
        `${tag}  `
    ))}
    </p>
    </div>
    </center>
    </div>
    );
}
 
export default Box;