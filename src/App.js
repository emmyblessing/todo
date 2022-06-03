import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // USE EFFECT RUN ONCE
  useEffect(() => {
    getLocalTodos();
  }, []);

  // USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break
    }
  };

  // Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Emmy Todo List </h1>

      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
