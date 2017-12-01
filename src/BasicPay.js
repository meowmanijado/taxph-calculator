import React from 'react';
import PropTypes from 'prop-types';

export class BasicPay extends React.Component {

	render() {
		return (
			<div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Basic Pay
				     </label>
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Period:
				    </label>
					<div className="relative">
						<select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" 
								id="grid-state"
								value={this.props.period} 
								onChange={this.props.onChange} 
								name="period">
								<option value="monthly">Monthly</option>
								<option value="semi-monthly">Semi-Monthly</option>
						</select>
						<div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
							<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Basic Salary:
				    </label>
				    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
				    		id="username" 
				    		type="text"
				    		name="salary"
				    		onChange={this.props.onChange}
				    		value={this.props.salary} />
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Status:
				    </label>
					<div className="relative">
						<select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" 
								id="grid-state"
								value={this.props.status}
								onChange={this.props.onChange}
								name="status">
								<option value="single">Single</option>
								<option value="married">Married</option>
						</select>
						<div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
							<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BasicPay;

BasicPay.propTypes = {
	salary: PropTypes.number.isRequired
}