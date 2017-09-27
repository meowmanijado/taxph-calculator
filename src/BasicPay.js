import React from 'react';

class BasicPay extends React.Component {
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

		return (
			<div>
				<select value={this.state.period} onChange={this.handleChange}
					name="period">
					<option value="semi-monthly">Semi-Monthly</option>
					<option value="monthly">Monthly</option>
				</select>
				<input 
					type="text" 
					name="basicSalary"
					onChange={this.handleUserInput}
					value={this.state.basicSalary} />
				<select value={this.state.status} onChange={this.handleChange}
					name="status">
					<option value="single">Single</option>
					<option value="married">Married</option>
				</select>
				<input 
					type="text" 
					name="sss"
					value={this.state.sss} />

				<p>{this.state.basicSalary}</p>
				<p>{this.state.period}</p>
				<p>{this.state.status}</p>
				<p>{this.state.sss}</p>
				<p>Total: {totalBasicPay}</p>
			</div>
		)
	}
}

export default BasicPay;