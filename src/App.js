import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicPay from './BasicPay';


class App extends Component {
  handleSubmit(e) {
    alert('foo');
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tax Calculator {this.props.basicSalary}</h1>
        </div>
        <form onSubmit={this.handleSubmit}>

          <BasicPay />
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}
export default App;



