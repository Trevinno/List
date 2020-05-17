import React, { Component } from 'react';
import SearchBar from './Searchbar'
import {getData, getTags} from '../mockDatabase/database.js'
import Box from './box'
import Tags from './tags'


class Homepage extends Component {
    state = {  
        database: [],
        term: 'Texts of tags'
    }

    componentDidMount() {
        this.setState({database: getData()})
    }

handleSearch = (e) => {
    this.setState({term: e.target.value})
}

    render() { 
        const {database, term} = this.state;
        return (
            <div>

            <SearchBar
            term = {term}  
            updateSearch = {this.handleSearch}         
            />

            <Tags/>

            {database.map(box => ( 
            <Box
            database = {box}
            year = {box.date.year}
            month = {box.date.month}
            tags = {box.tags}
            />
            ))}

            <p>{console.log(database)}</p>

            </div>
        );
    }
}
 
export default Homepage;