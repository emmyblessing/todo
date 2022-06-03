import React from 'react';

const Form = ({ inputText, todos, setTodos, setInputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {
        text: inputText,
        completed: false,
        id: Math.random()*1
      }
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  };

  return (
    <div className='form'>
      <form>
        <div className='form-control'>
          <input 
            type='text' 
            value={inputText} 
            onChange={inputTextHandler} 
            className='todo-input' 
          />
          <button className='todo-button' onClick={submitTodoHandler} type="submit">
            <i className='fa fa-plus-square'></i>
          </button>
        </div>
        <div className='select'>
          <select name='todos' onChange={statusHandler} className='filter-todo'>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form;