import React from 'react';

export class BasicPay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			period: 'semi-monthly',
			basicSalary: 0,
			status: 'single',
			sss: 0,
			philhealth: 0,
			pagibig: 100
		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.philhealthContrib = this.philhealthContrib.bind(this);
	}

	handleUserInput(e) {
		this.setState({[e.target.name]: e.target.value })
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault();

		alert('foo');
	}

	philhealthContrib(e) {
		e.preventDefault();
		const newPhilhealth = this.state.basicSalary === 0 ? 100 : 200;

		this.setState({philhealth: newPhilhealth});
	}

	// sssContribution(e) {
	// 	e.preventDefault();

	// 	const employeeContrib = 0.0363;
	// 	const totalContrib = employeeContrib * this.state.basicSalary;
	// 	const sssContrib = Math.ceil(totalContrib);

	// 	this.setState({sss: sssContrib})
	// }

	render() {
		// const getPeriod = this.state.period === 'semi-monthly' ? 10 : 20;
		// const getStatus = this.state.status === 'single' ? 100 : 200;

		return (
			<form onSubmit={this.handleSubmit}>
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
				<p>sss: 
				<input 
					type="text" 
					name="sss"
					onChange={this.handleUserInput}
					value={this.state.sss} />
				</p>
				<p>philhealth: 
				<input 
					type="text" 
					name="philhealth"
					onChange={this.philhealthContrib}
					value={this.state.philhealth} />
				</p>
				<p>pagibig: 
				<input 
					type="text" 
					name="pagibig"
					onChange={this.handleUserInput}
					value={this.state.pagibig} />
				</p>
				 <input type="submit" value="Submit" />
			</form>
		);
	}
}



export default BasicPay;