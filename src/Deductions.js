import React from 'react'

class Deductions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sss: 0,
			philHealth: 0,
			pagibig: 0
		}

		this.handleUserInput = this.handleUserInput.bind(this)
	}

	sssCompute(salary) {
		// switch (salary) {
		// 	case 1000 <= 1249.99:
		// 		this.setState({sss: 36.30});
		// 		break;
		// 	case 1250 <= 1749.99:
		// 		this.setState({sss: 54.50});
		// 		break;
		// 	default:
		// 		this.setState({sss: 0});
		// }
	}

	handleUserInput(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	render() {

		return (
			<div>
				<input 
					type="text" 
					name="philHealth"
					onChange={this.handleUserInput}
					value={this.state.philHealth} />
				<input 
					type="text" 
					name="pagibig"
					onChange={this.handleUserInput}
					value={this.state.pagibig} /> 
				<p>{this.state.philHealth}</p>
				<p>{this.state.pagibig}</p>
			</div>
		)
	}
}

export default Deductions;