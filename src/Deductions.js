import React from 'react';

export class Deductions extends React.Component {

	render() {
		return (
			<div>
				<h4>Deductions</h4>
				<p>SSS: 
					<input 
						type="text" 
						name="sss"
						onChange={this.props.onChange}
						value={this.props.sss} />
				</p>
				<p>Philhealth: 
					<input 
						type="text" 
						name="philhealth"
						onChange={this.props.onChange}
						value={this.props.philhealth} />
				</p>
				<p>Pagibig: 
					<input 
						type="text" 
						name="pagibig"
						onChange={this.props.onChange}
						value={this.props.pagibig} />
				</p>
			</div>
		)
	}
}


export default Deductions;