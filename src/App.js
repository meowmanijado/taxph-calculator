import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicPay from './BasicPay';
import Deductions from './Deductions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tax Calculator {this.props.basicSalary}</h1>
        </div>
        <form>

          <BasicPay />
          <Deductions />
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}
export default App;
