import React from 'react'
import {v4 as uuidv4} from "uuid";

const FormInput = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        
    }
    return (
    <div>
        <form onSubmit = {onFormSubmit}>
            <input 
                type="text" 
                placeholder="Search Todo.." 
                className="task-search"
                
                
            />
            <div>
                <button className="button-search" type="submit">Search</button>
                <button className='button-addnewtask' type='submit'>Add New Task</button>
            </div>
        </form>
        {/* <button className="button-add" type="submit">Submit</button> */}
    </div>
  );
}


export default FormInput