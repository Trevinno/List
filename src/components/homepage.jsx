import React, { Component } from 'react';
import SearchBar from './Searchbar'
import {getData, getTags} from '../mockDatabase/database.js'
import Box from './box'
import Tags from './tags'
import axios from 'axios'
import './box.css'


class Homepage extends Component {
    state = {  
        database: [],
        term: ''
    }

    componentDidMount() {
            axios.get('http://localhost:5000/api/')
              .then(response => {
                if (response.data.length > 0) {
                  this.setState({
                    database: response.data.map(el => el)
                  })
                }
              })
              .catch((error) => {
                console.log(error);
              })
    }

    searchHandler = (e) => {
        this.setState({term: e.target.value})
    }

    searchingFor = (term) => {
        return (x) => {
          return x.tags.includes(term.toLowerCase()) || !term;
        };
      }

    render() { 
        const {database, term} = this.state;

        return (
            <React.Fragment>
            <header className="flex-container">

            <button className="flex-button">
            Hello Sir
            </button>

            <SearchBar
            term = {term}  
            updateSearch = {this.searchHandler}         
            />

            </header>

            <container className="container">
            <Tags/>
            </container>

            {database.filter(this.searchingFor(term)).map(box => ( 
            <Box
            database = {box}
            year = {box.date.year}
            month = {box.date.month}
            tags = {box.tags}
            />
            ))}
            

            <p>{console.log(database)}</p>
            </React.Fragment>
        );
    }
}
 
export default Homepage;