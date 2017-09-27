import React from 'react';

class BasicPay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			period: 'semi-monthly',
			basicSalary: '0',
			status: 'single'
		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleUserInput(e) {
		this.setState({ basicSalary: e.target.value })
	}

	handleChange(e) {
		this.setState({
			period: e.target.value,
			status: e.target.value
		})
	}

	render() {
		return (
			<div>
				<select value={this.state.period} onChange={this.handleChange}
					name="period">
					<option value="semi-monthly">Semi-Monthly</option>
					<option value="monthly">Monthly</option>
				</select>
				<input 
					type="text" 
					onChange={this.handleUserInput}
					value={this.state.basicSalary} />
				<select value={this.state.status} onChange={this.handleChange}
					name="status">
					<option value="single">Single</option>
					<option value="married">Married</option>
				</select>
				<p>{this.state.basicSalary}</p>
				<p>{this.state.period}</p>
				<p>{this.state.status}</p>
			</div>
		)
	}
}

export default BasicPay;