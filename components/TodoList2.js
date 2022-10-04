import React from 'react'

const TodoList2 = ({status, setStatus, filteredTodos}) => {
    return (
    <><div className="header">
            <h1>TodoList</h1>
        </div>
        <div className='button-list'>
            
                <button className='button-all'>All</button> 
            
            
                <button className='button-done'>Done</button>
            
            
                <button className='button-todo'>Todo</button>
            
        </div>
    </>
    );
  }

export default TodoList2