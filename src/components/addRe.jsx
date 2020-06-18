import React, { Component } from 'react';
import './box.css'


class AddRe extends Component {
   
    
    render() { 
       const {handleSubmit, kacchanfunc, name, desc, url, month, year, tag1, tag2, tag3} = this.props;
        return (
            <React.Fragment>
            <div className='newTitle'>
                <h2>Add a Resource</h2>
            </div>
            <form onSubmit={handleSubmit} className='newcenter'>
				<div className='modalbox text-input'>
					
					<input
                        className="input1"
						type="text"
						value={name}
                        onChange={ (e) => {
                            kacchanfunc(e, 1)
                        }}
                        name='name'
					/>
                    <label className="input1">Name: </label>
				</div>

				<div className='modalbox text-input'>
					
					<input
                        type='text'
                        className='input1'
						value={desc}
                        onChange={(e) => {
                            kacchanfunc(e, 2)
                        }}
                        name='desc'
					/>
                    <label className='input1'>Description: </label>
				</div>
                <div className='modalbox text-input'>
					
					<input
                        type='text'
                        className='input1'
						value={url}
                        onChange={(e) => {
                            kacchanfunc(e, 3)
                        }}
                        name='url'
					/>
                    <label className='input1'>URL: </label>
				</div>

                <div className='modalbox text-input'>
					<input
                        type='text'
                        className='input1'
                        value={month}
                        onChange={(e) => {
                            kacchanfunc(e, 4)
                        }}
                        name='month'
					/>
                    <label className='input1'>Month: </label>
				</div>

                <div className='modalbox text-input'>
					<input
                        type='text'
                        className='input1'
						value={year}
                        onChange={(e) => {
                            kacchanfunc(e, 5)
                        }}
                        name='year'
					/>
                    <label className='input1'>Year: </label>
				</div> 

                <div className='modalbox text-input'>
					
					<input
                        type='text'
                        className='input1'
						value={tag1}
                        onChange={(e) => {
                            kacchanfunc(e, 6)
                        }}
                        name='tag1'
					/>
                    <label className='input1'>1st Tag: </label>
				</div> 

                <div className='modalbox text-input'>
					
					<input
                        type='text'
                        className='input1'
						value={tag2}
                        onChange={(e) => {
                            kacchanfunc(e, 7)
                        }}
                        name='tag2'
					/>
                    <label className='input1'>2nd Tag: </label>
				</div> 

                <div className='modalbox text-input'>
					
					<input
                        type='text'
                        className='input1'
						value={tag3}
                        onChange={(e) => {
                            kacchanfunc(e, 8)
                        }}
                        name='tag3'
					/>
                    <label className='input1'>3rd Tag: </label>
				</div> 

				<button type="submit" className='buttoncenter button raise'>Submit</button>
			</form>


            </React.Fragment>
        );
    }
}
 
export default AddRe;