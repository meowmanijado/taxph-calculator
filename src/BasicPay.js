import React from 'react';
import PropTypes from 'prop-types';

export class BasicPay extends React.Component {

	render() {
		return (
			<div>
				<h4>Basic Pay</h4>
				<p>Period:
					<select value={this.props.period} onChange={this.props.onChange} name="period">
						<option value="monthly">Monthly</option>
						<option value="semi-monthly">Semi-Monthly</option>
					</select>
				</p>
				<p>Basic Salary:
					<input 
						type="text" 
						name="salary"
						onChange={this.props.onChange}
						value={this.props.salary} />
				</p>
				<p>Status:
					<select value={this.props.status} onChange={this.props.onChange} name="status">
						<option value="single">Single</option>
						<option value="married">Married</option>
					</select>
				</p>
			</div>
		);
	}
}

export default BasicPay;

BasicPay.propTypes = {
	salary: PropTypes.number.isRequired
}