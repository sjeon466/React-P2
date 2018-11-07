import React, { Component } from 'react';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  id = 3;

  state = {
    todos: [
      {
        id: 0,
        text: "Learn Angular",
        checked: true
      },
      {
        id: 1,
        text: "Learn React",
        checked: false
      },
      {
        id: 2,
        text: "Learn Vue",
        checked: false
      }
    ]
  }

  handleDelete = (id) => {
   /* const nextTodos = this.state.todos.filer( 
      (todo) => {
        if(todo.id !== id){
          return todo;
        }
    });*/
    const nextTodos = this.state.todos.filter( 
      (todo)=> (todo.id !== id) 
    );
    this.setState(
      {
        todos : nextTodos
    });
  };

  handleCheck = (id) => {
      // change only the desired data  using MAP.
      const nextTodos = this.state.todos.map( 
        (todo) => {
          if(todo.id === id){
            return { ...todo, checked: !todo.checked};
          }
          return todo;
        });
      this.setState({
        todos : nextTodos
      })
  };

  handleCreate = (text) => {
    // create data
    const todoData = {
      id : this.id++,
      text, 
      checked: false
    };

    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Today's Task</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate}/>
        <div className="white-box">
          <TodoList todos= {this.state.todos} onCheck={this.handleCheck} onRemove={this.handleDelete}/>
        </div>
      </div>
    );
  }
}

export default App;