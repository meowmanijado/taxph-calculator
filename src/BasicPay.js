import React from 'react';

export class BasicPay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			period: 'semi-monthly',
			basicSalary: 0,
			status: 'single',
			sss: 0
		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleUserInput(e) {
		this.setState({[e.target.name]: e.target.value })
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		const getPeriod = this.state.period === 'semi-monthly' ? 10 : 20;
		const getStatus = this.state.status === 'single' ? 100 : 200;
		const totalBasicPay = getPeriod + getStatus + this.state.basicSalary;

		// Calculate sss
		const employeeContrib = 0.0363;
		const totalContrib = employeeContrib * this.state.basicSalary;
		const sssContrib = Math.ceil(totalContrib);

		return (
			<div>
				<select value={this.state.period} onChange={this.handleChange} name="period">
					<option value="semi-monthly">Semi-Monthly</option>
					<option value="monthly">Monthly</option>
				</select>
				<input 
					type="text" 
					name="basicSalary"
					onChange={this.handleUserInput}
					value={this.state.basicSalary} />
				<select value={this.state.status} onChange={this.handleChange} name="status">
					<option value="single">Single</option>
					<option value="married">Married</option>
				</select>
				<input 
					type="text" 
					name="basicSalary"
					onChange={this.handleUserInput}
					value={sssContrib} />

				<p>{this.state.basicSalary}</p>
				<p>{this.state.period}</p>
				<p>{this.state.status}</p>
				<p>Total: {totalBasicPay}</p>
				<p>SSS: {totalContrib}</p>
			</div>
		);
	}
}



export default BasicPay;