import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicPay from './BasicPay';
import Deductions from './Deductions';
import Total from './Total';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {period: 'monthly', salary: 0, status: 'single', sss: 0, philhealth: 0, pagibig: 0, totalBasicPay: 0, totalDeduction: 0, taxableIncome: 0, withholdingTax: 0, netIncome: 0}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.taxCalculator = this.taxCalculator.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!(this.state.salary === nextState.salary) ||
      !(this.state.period === nextState.period) ||
      !(this.state.philhealth === nextState.philhealth)) {
      const ee = 0.0363,
            salary = parseInt(nextState.salary, 10),
            period = nextState.period;

      this.setState({
        sss: period === 'semi-monthly' ? ee * salary / 2 : ee * salary,
        pagibig: period === 'semi-monthly' ?  50 : 100,
        philhealth: period === 'semi-monthly' ?  this.getPhilhealth(salary) / 2 : this.getPhilhealth(salary), 
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const basicPay = this.state.salary,
          sss = this.state.sss,
          philhealth = this.state.philhealth,
          pagibig = this.state.pagibig,
          deduction = sss + philhealth + pagibig,
          taxableIncome = this.state.salary - deduction;

    this.setState({totalBasicPay: basicPay.toLocaleString()});

    this.setState({totalDeduction: deduction.toLocaleString()});
    this.setState({taxableIncome: taxableIncome.toLocaleString() });

    const totalTaxIncome = this.state.salary - deduction;
    const netIncome = parseInt(this.state.salary - deduction, 10) - parseInt(this.taxCalculator(totalTaxIncome), 10);

    this.setState({withholdingTax: this.taxCalculator(totalTaxIncome).toLocaleString()});
    this.setState({netIncome: netIncome.toLocaleString()});
  } 

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getPhilhealth(salary) {
    switch (true) {
      case salary <= 8999.99:
        return 100.00;
        // eslint-disable-next-line
        break;
      case salary <= 10999.99:
        return 125.00;
        // eslint-disable-next-line
      break;
      case salary <= 11999.99:
        return 137.50;
        // eslint-disable-next-line
      break;
      case salary <= 12999.99:
        return 150.00;
        // eslint-disable-next-line
      break;
      case salary <= 13999.99:
        return 162.50;
        // eslint-disable-next-line
      break;
      case salary <= 14999.99:
        return 175.00;
        // eslint-disable-next-line
      break;
      case salary <= 15999.99:
        return 187.50;
        // eslint-disable-next-line
      break;
      case salary <= 16999.99:
        return 200.00;
        // eslint-disable-next-line
      break;
      case salary <= 17999.99:
        return 212.50;
        // eslint-disable-next-line
      break;
      case salary <= 18999.99:
        return 225.00;
        // eslint-disable-next-line
      break;
      case salary <= 19999.99:
        return 237.50;
        // eslint-disable-next-line
      break;
      case salary <= 20999.99:
        return 250.00;
        // eslint-disable-next-line
      break;
      case salary <= 21999.99:
        return 262.50;
        // eslint-disable-next-line
      break;
      case salary <= 22999.99:
        return 275.00;
        // eslint-disable-next-line
      break;
      case salary <= 23999.99:
        return 287.50;
        // eslint-disable-next-line
      break;
      case salary <= 24999.99:
        return 300.00;
        // eslint-disable-next-line
      break;
      case salary <= 25999.99:
        return 312.50;
        // eslint-disable-next-line
      break;
      case salary <= 26999.99:
        return 325.00;
        // eslint-disable-next-line
      break;
      case salary <= 27999.99:
        return 337.50;
        // eslint-disable-next-line
      break;
      case salary <= 28999.99:
        return 350.00;
        // eslint-disable-next-line
      break;
      case salary <= 29999.99:
        return 362.50;
        // eslint-disable-next-line
      break;
      case salary <= 30999.99:
        return 375.00;
        // eslint-disable-next-line
      break;
      case salary <= 31999.99:
        return 387.50;
        // eslint-disable-next-line
      break;
      case salary <= 32999.99:
        return 400.00;
        // eslint-disable-next-line
      break;
      case salary <= 33999.99:
        return 412.50;
        // eslint-disable-next-line
      break;
      case salary <= 34999.99:
        return 425.00;
        // eslint-disable-next-line
      break;
      case salary >= 35000.00:
        return 437.50;
        // eslint-disable-next-line
      break;
      default:
        return 0;
    }
  }

  taxCalculator(taxableIncome) {

    const taxTable = {
          income: [1,4167,5000,6667,10000,15833,25000,45833],
          excemption: [0,0,41.67,208.33,708.33,1875,4166.67,104167.67],
          percent: [0,0.5,0.10,0.15,0.20,0.25,0.30,0.32]
    }

    const income = taxTable.income;

    const closest = (income,taxableIncome) => {
      var i = 0,
          minDiff = 50000,
          ans;

      for(i in income) {
         const m = Math.abs(taxableIncome-income[i]);
         if(m < minDiff) { 

            minDiff = m; 
            ans = income[i];

         }
      }
      return ans;
    }

    const table = income.indexOf(closest(income,taxableIncome)),
          tax = taxTable.income[table - 1],
          excemption = taxTable.excemption[table - 1],
          percent = taxTable.percent[table - 1];

    const withholdingTax = parseInt(excemption, 10) + parseInt([(taxableIncome - tax) * percent], 10);

    return withholdingTax;

  }

  render() {
    return (
      <div className="grid mx-auto md pt-8 max-w-md">

        <form onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 align-center">

          <BasicPay period={this.state.period} salary={this.state.salary} status={this.state.status} onChange={this.handleChange} />
          <Deductions sss={this.state.sss} philhealth={this.state.philhealth} pagibig={this.state.pagibig} onChange={this.handleChange} />
          <Total totalBasicPay={this.state.totalBasicPay} totalDeduction={this.state.totalDeduction} taxableIncome={this.state.taxableIncome} withholdingTax={this.state.withholdingTax} netIncome={this.state.netIncome} />

          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}
export default App;



