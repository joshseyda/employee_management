import React, { Component } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';

class App extends Component {
  render(){
    return (
      <div>
      <section name="header">
        <h1>Employee List</h1>
      </section>
      <section name="main">
        <EmployeeList />
      </section>
      </ div>
    );
  }
}

export default App;
