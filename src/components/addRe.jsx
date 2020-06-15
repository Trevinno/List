import React, {useState} from 'react';

const AddRe = ({handleSubmit}) => {
   
    const [state, setState] = useState({ 
        name: '',
        desc: '',
        url: '',
        date: {
            year: 0, month: ''
        },
        tags: []
    });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


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
						value={state.date.month}
                        onChange={handleChange}
                        name='date.month'
					/>
				</div>

                <div>
					<label>Year</label>
					<textarea
						value={state.date.year}
						onChange={handleChange}
					/>
				</div>

				{/* <div>
					<label>Topic</label>
					<select value={topic} onChange={this.handleTopicChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div> */}
				<button type="submit">Submit</button>
			</form>

    );
}
 
export default AddRe;