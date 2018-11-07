import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
  state = {
    input : ""
  }

  handleChange = (e) => {
    //console.log(e.target);
    this.setState(
      {
        input : e.target.value
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    // set class name
    // set place holder
    // make button 

    return <form className = "CreateForm" onSubmit={this.handleSubmit}>
      <input 
        placeholder="Type a task.." 
        value = {this.state.input} 
        onChange={this.handleChange} 
      />
      <button type="submit">Add</button>
    </form>;
  }
}

export default CreateForm;