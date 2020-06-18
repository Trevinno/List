import React, {useState} from 'react';
import axios from 'axios'

const AddRe = ({handleSubmit}) => {
   
    const [state, setState] = useState({ 
        name: '',
        desc: '',
        url: '',
        date: {
            year: 0, month: ''
        },
        tags: [],
        tagsnum: 0
    });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  handleSubmit = (event) => {
    const tool = {
        name: state.username,
        desc: state.description,
        url: state.duration,
        date: {
            year: state.date.year,
            month: state.date.month
        },
        tags: state.tags
      }
      axios
        .post('http://localhost:5000/api/save', tool)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    console.log('hello');
    event.preventDefault()
  }


    return (  
        <form onSubmit={handleSubmit}>
				<div>
					<label>Name </label>
					<input
						type="text"
						value={state.name}
                        onChange={handleChange}
                        name='name'
					/>
				</div>
				<div>
					<label>Description</label>
					<textarea
                        type='text'
						value={state.desc}
                        onChange={handleChange}
                        name='desc'
					/>
				</div>
                <div>
					<label>URL</label>
					<textarea
                        type='url'
						value={state.url}
                        onChange={handleChange}
                        name='url'
					/>
				</div>
                <div>
					<label>Month</label>
					<textarea
                        type='text'
                        value={''}
                        onChange={handleChange}
                        name='date.month'
					/>
				</div>

                <div>
					<label>Year</label>
					<textarea
                        type='text'
						value={0}
                        onChange={handleChange}
                        name='date.year'
					/>
				</div> 

                <div> 
					<label>Number of Tags</label>
					<select value={state.tagsnum} onChange={handleChange} name='tagsnum'>
						<option value='1' >1</option>
						<option value='2' >2</option>
						<option value='3' >3</option>
					</select>
				</div>

                <p>{
                    <div>
					<label>Tags</label>
					<textarea
                        type='text'
						value={'nothing'}
                        onChange={handleChange}
                        name='tags'
					/>
				    </div> 
                    
                    }</p>

				<button type="submit">Submit</button>
			</form>

    );
}
 
export default AddRe;