import React, { Component } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList'

class App extends Component() {
  render(){
    return (
      <>
      <section name="header">
        <h1>Employee List</h1>
      </section>
      <section name="main">
        <EmployeeList />
      </section>
      </>
    );
  }
}

export default App;
