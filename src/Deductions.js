import React from 'react';
import PropTypes from 'prop-types';

export class Deductions extends React.Component {

	render() {
		return (
			<div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Deductions
				     </label>
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        SSS:
				    </label>
				    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
				    		type="text"
				    		name="sss"
				    		onChange={this.props.onChange}
				    		value={this.props.sss} />
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Philhealth:
				    </label>
				    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
				    		type="text"
				    		name="philhealth"
				    		onChange={this.props.onChange}
				    		value={this.props.philhealth} />
				</div>
				<div className="mb-4">
					<label className="block text-grey-darker text-sm font-bold mb-2" for="username">
				        Pagibig:
				    </label>
				    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
				    		type="text"
				    		name="pagibig"
				    		onChange={this.props.onChange}
				    		value={this.props.pagibig} />
				</div>
			</div>
		)
	}
}


export default Deductions;

Deductions.propTypes = {
	sss: PropTypes.number
}