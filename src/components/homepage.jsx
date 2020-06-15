import React, { Component } from 'react';
import Modal from 'react-modal'
import SearchBar from './Searchbar'
import {getData, getTags} from '../mockDatabase/database.js'
import Box from './box'
import Tags from './tags'
import axios from 'axios'
import './box.css'
import AddRe from './addRe'
import EditRe from './editRe'
import DeleteRe from './deleteRe'


class Homepage extends Component {
    state = {  
        database: [],
        term: '',
        modalAdd: false,
        modalEdit: false,
        modalDelete: false,
        name: '',
        desc: '',
        url: '',
        date: {
          year: '',
          month: '',
        },
        tags: []
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

    solution = array => {
      const arr = new Array();
      array.forEach(e => {
          e.tags.forEach(el => {
              if (!(arr.includes(el))) {
                  arr.push(el)
              } else {
                  console.log('not working')
              }
          })
  
      })
      console.log(arr)
      return arr;
  }

    searchHandler = (e) => {
        this.setState({term: e.target.value})
    }

    searchingFor = (term) => {
        return (x) => {
          return x.tags.includes(term.toLowerCase()) || !term;
        };
      }

      setModal = (bool, num) => {
        if (num === 1) {
          this.setState({modalAdd: bool});
        } else if (num === 2) {
          this.setState({modalEdit: bool});
        } else {
          this.setState({modalDelete: bool});
        }
      }

      handleSubmit = event => {
          // axios
          //   .post('http://localhost:5000/api/save', {
          //     title: 'New Todo',
          //     completed: false
          //   })
          //   .then(res => showOutput(res))
          //   .catch(err => console.error(err));
        console.log(event, 'helloooo');
        event.preventDefault()
      }

    render() { 
        const {database, term} = this.state;

        return (
            <React.Fragment>
            <header className="flex-container fontSource">

            
            <button
            className="flex-button button raise"
            onClick={() => this.setModal(true,1)}
            >
            +
            </button>

            <SearchBar
            term = {term}  
            updateSearch = {this.searchHandler}         
            />

            </header>

          <Modal
          isOpen={this.state.modalAdd}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => this.setModal(false,1)}
          handleSubmit = {this.handleSubmit}
          >
            <AddRe></AddRe>

          </Modal>





            <Tags
            solution = {this.solution}
            database = {this.state.database}
            />
           

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