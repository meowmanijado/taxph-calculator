import React from 'react';


export class BasicPay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			period: 'monthly',
			basicSalary: 0,
			status: 'single',
			sss: 0,
			philhealth: 0,
			pagibig: 0,
			totalDeduction: 0,
			taxableIncome: 0
		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getPhilhealth = this.getPhilhealth.bind(this);
		this.sssContribution = this.sssContribution.bind(this);
		this.getTaxableIncome = this.getTaxableIncome.bind(this);
	}

	handleUserInput(e) {
		this.setState({[e.target.name]: e.target.value })
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault();

		this.getTaxableIncome();
	}

	getPhilhealth() {
		const philhealthContrib = this.state.basicSalary;

		this.setState({philhealth: philhealthContrib});

		return philhealthContrib;
	}

	sssContribution() {

		const employeeContrib = 0.0363;
		const totalContrib = employeeContrib * this.state.basicSalary;

		if (this.state.period === 'semi-monthly') {

			this.setState({sss: Math.ceil(totalContrib) / 2});

			return  Math.ceil(totalContrib) / 2;

		}

		this.setState({sss: Math.ceil(totalContrib)});

		return Math.ceil(totalContrib);
		
	}

	getPagibig() {

		const pagibigContrib = this.state.period === 'semi-monthly' ?  50 : 100;

		this.setState({pagibig: pagibigContrib});

		return pagibigContrib;
	}

	getTotalDeduction() {
		const totalDeduction = this.sssContribution() + this.getPhilhealth() + this.getPagibig();

		this.setState({totalDeduction: totalDeduction});

		return totalDeduction;
	}

	getTaxableIncome() {
		// Basic salary - (sss + philhealth + pagibig)
		const basicSalary = this.state.basicSalary;
		
		const deduction = this.getTotalDeduction();

		this.setState({taxableIncome: basicSalary - deduction});
	}

	render() {

		return (
			<form onSubmit={this.handleSubmit}>	
				<p>Basic Pay</p>
				<p>Period:
					<select value={this.state.period} onChange={this.handleChange} name="period">
						<option value="monthly">Monthly</option>
						<option value="semi-monthly">Semi-Monthly</option>
					</select>
				</p>
				<p>Basic Salary:
					<input 
						type="text" 
						name="basicSalary"
						onChange={this.handleUserInput}
						value={this.state.basicSalary} />
				</p>
				<p>Status:
					<select value={this.state.status} onChange={this.handleChange} name="status">
						<option value="single">Single</option>
						<option value="married">Married</option>
					</select>
				</p>
				<p>Deductions</p>
				<p>SSS: 
					<input 
						type="text" 
						name="sss"
						value={this.state.sss} />
				</p>
				<p>Philhealth: 
					<input 
						type="text" 
						name="philhealth"
						value={this.state.philhealth} />
				</p>
				<p>Pagibig: 
					<input 
						type="text" 
						name="pagibig"
						value={this.state.pagibig} />
				</p>
				<p>Total Deductions: {this.state.totalDeduction}</p>
				<p>Taxable Income: {this.state.taxableIncome}</p>
				<p>Withholding Tax: </p>
				<p>Net Income: </p>

				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default BasicPay;