import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import FormSearch from './components/FormSearch';
import TodosList from './components/TodosList';
import TodoList2  from './components/TodoList2';
import TodoSearch from './components/TodoSearch';
import './App.css';


const App = () => {
  // useEffect (() => {
  //   filterHandler();
  // }, [todos, status]);

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  // const filterHandler = () => {
  //   switch(status) {
  //     case 'todo2':
  //       setFilteredTodos(todos.filter(todo => todo.todo2 === true));
  //       break;
  //       case 'done':
  //           setFilteredTodos(todos.filter(todo => todo.done === true));
  //           break;
  //       default:
  //         setFilteredTodos(todos);
  //         break;
    
  //   }
  // } 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
  <div className='container'>
    <div className='app-wrapper'>
      <div>
        <Header/>
      </div>
      <div className='app-new'>
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div><br/>
      <div>
        <TodoSearch />
      </div>
      <div className='app-new'>
      <div>
        <FormSearch />
      </div>
      </div>

      {/* --- LIST --- */}
      <div>
        <TodoList2 
        setStatus={setStatus}
        filteredTodos={filteredTodos}
        />
      </div>
      <div>
        <TodosList  
          todos={todos} 
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
      </div>
    </div>
  </div>
  );
};

export default App;
