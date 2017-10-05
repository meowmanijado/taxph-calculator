import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicPay from './BasicPay';
import Deductions from './Deductions';
import Total from './Total';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {period: 'monthly', salary: 0, status: 'single', sss: 0, philhealth: 0, pagibig: 0, totalBasicPay: 0, totalDeduction: 0}

    this.getTotalBasicPay = this.getTotalBasicPay.bind(this);
    this.getTotalDeduction = this.getTotalDeduction.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!(this.state.salary === nextState.salary) ||
      !(this.state.period === nextState.period)) {
      const ee = 0.0363,
            salary = parseInt(nextState.salary, 10),
            period = nextState.period;

      this.setState({
        sss: period === 'semi-monthly' ? ee * salary / 2 : ee * salary,
        pagibig: this.state.period === 'semi-monthly' ?  50 : 100,
        philhealth: this.state.period === 'semi-monthly' ?  this.getPhilhealth(salary) / 2 : this.getPhilhealth(salary), 
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getTotalBasicPay();
    this.getTotalDeduction();
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  getTotalBasicPay() {
    const salary = this.state.salary;

    this.setState({totalBasicPay: salary});
  }

  getTotalDeduction() {   
    const sss = this.state.sss,
          philhealth = this.state.philhealth,
          pagibig = this.state.pagibig;

    this.setState({totalDeduction: sss + philhealth + pagibig});
  }

  getPhilhealth(salary) {
    switch (salary) {
      case 15000:
        return 10000;
      break;
      case 20000:
        return 15000;
      break;
      default:
        return 0;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tax Calculator {this.props.basicSalary}</h1>
        </div>
        <form onSubmit={this.handleSubmit}> 

          <BasicPay period={this.state.period} salary={this.state.salary} status={this.state.status} onChange={this.handleChange} />
          <Deductions sss={this.state.sss} philhealth={this.state.philhealth} pagibig={this.state.pagibig} onChange={this.handleChange} />
          <Total totalBasicPay={this.state.totalBasicPay} totalDeduction={this.state.totalDeduction} />

          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}
export default App;



