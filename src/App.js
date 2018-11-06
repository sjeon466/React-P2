import React, { Component } from 'react';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Today's Task</h1>
        </div>
        <CreateForm />
        <div className="white-box">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;