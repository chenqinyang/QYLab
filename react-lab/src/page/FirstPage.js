import React, { Component } from 'react';

// Redux integration
import { connect } from 'react-redux';

class FirstPage extends Component {

	constructor(props) {
		super(props);
		console.log("FirstPage.props = ", props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.history.push('/EntryPage');
	}

	render() {
		return (	
			<form onSubmit={this.handleSubmit}>
				<div>
				This is FirstPage. &nbsp;&nbsp;&nbsp;

					<a href="#" onClick={this.handleClick}>
						Jump back to Entry Page
					</a>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	state: state
})

FirstPage = connect(mapStateToProps)(FirstPage);

export default FirstPage;
