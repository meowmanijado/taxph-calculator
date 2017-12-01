import React from 'react';

export class Total extends React.Component {

	render() {
		return (
			<div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Total Basic Pay: {this.props.totalBasicPay}
				    </label>
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Total Deductions: {this.props.totalDeduction}
				    </label>
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Taxable Income: {this.props.taxableIncome}
				    </label>
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Withholding Tax: {this.props.withholdingTax}
				    </label>
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Net Income: {this.props.netIncome}
				    </label>
				</div>
			</div>
		)
	}
}

export default Total;