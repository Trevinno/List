import React, { Component } from 'react';
import Modal from 'react-modal'
import SearchBar from './Searchbar'
// import {getData, getTags} from '../mockDatabase/database.js'
import Box from './box'
import Tags from './tags'
import axios from 'axios'
import './box.css'
import AddRe from './addRe'
import EditRe from './editRe'
import DeleteRe from './deleteRe'

Modal.setAppElement('#root')

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
        month: '',
        year: '',
        tag1: '',
        tag2: '',
        tag3: ''
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

      handleSubmit = (event) => {
        let tagsarr = new Array(this.state.tag1, this.state.tag2, this.state.tag3)
        tagsarr = tagsarr.filter( str => {
          return (str != '')
        })

        const tool = {
            name: this.state.name,
            desc: this.state.desc,
            url: this.state.url,
            date: {
                year: this.state.year,
                month: this.state.month
            },
            tags: tagsarr
          }
          axios
            .post('http://localhost:5000/api/save', tool)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
        console.log('Submit Succesful');
        this.setState({modalAdd: false});
        event.preventDefault()
      }

      handleEdit = (event) => {
        let tagsarr = new Array(this.state.tag1, this.state.tag2, this.state.tag3)
        tagsarr = tagsarr.filter( str => {
          return (str != '')
        })

        const tool = {
            name: this.state.name,
            desc: this.state.desc,
            url: this.state.url,
            date: {
                year: this.state.year,
                month: this.state.month
            },
            tags: tagsarr
          }
          axios
            .post('http://localhost:5000/api/save', tool)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
        console.log('hello');
        event.preventDefault()
      }

      kacchanfunc = (event, num) => {
        if (num === 1) {
          this.setState({
            name: event.target.value
          });
          console.log('hello sir')
        } else if (num === 2) {
          this.setState({
            desc: event.target.value
          });
        } else if (num === 3) {
          this.setState({
            url: event.target.value
          });
        } else if (num === 4) {
            this.setState({
            month: event.target.value
            });
        } else if (num === 5) {
            this.setState({
            year: event.target.value
            });
        } else if (num === 6) {
            this.setState({
            tag1: event.target.value
            });
        } else if (num === 7) {
            this.setState({
            tag2: event.target.value
            });
        } else if (num === 8){
            this.setState({
            tag3: event.target.value
            });
        } else {
            console.log('error')
        }
      
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
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => this.setModal(false,1)}
          >
            <AddRe
            name={this.state.name}
            desc={this.state.desc}
            url={this.state.url}
            month={this.state.month}
            year={this.state.year}
            tag1={this.state.tag1}
            tag2={this.state.tag2}
            tag3={this.state.tag3}
            handleSubmit={this.handleSubmit}
            kacchanfunc={this.kacchanfunc}
            >

            </AddRe>

          </Modal>


          <Modal
          isOpen={this.state.modalEdit}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => this.setModal(false,1)}
          >
            <EditRe
            name={this.state.name}
            desc={this.state.desc}
            url={this.state.url}
            month={this.state.month}
            year={this.state.year}
            tag1={this.state.tag1}
            tag2={this.state.tag2}
            tag3={this.state.tag3}
            handleSubmit={this.handleEdit}
            kacchanfunc={this.kacchanfunc}
            >

            </EditRe>

          </Modal>




            <Tags
            solution = {this.solution}
            database = {this.state.database}
            />
           

            {database.filter(this.searchingFor(term)).map(box => ( 
            <Box
            key={box._id}
            database = {box}
            year = {box.date.year}
            month = {box.date.month}
            tags = {box.tags}
            />
            ))}
            </React.Fragment>
        );
    }
}
 
export default Homepage;