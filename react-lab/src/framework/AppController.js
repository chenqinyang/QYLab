import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';


import EntryPage from '../page/EntryPage';
import FirstPage from '../page/FirstPage';

// lab
// import Navigator from '../framework/Navigator';

class AppController extends Component {

	constructor(props) {
	    super(props);
	    console.log("AppController.props = ", props);
	}

	render() {
		return (
			<div className="container">

				{console.log("AppController.props in render = ", this.props)}

				<div className="page-header">
					<h1>AppController --- <small>funcId: [ {this.props.state.funcId} ]</small></h1>
				</div>
				
				<Router history={history}>
		            <div>
		            	
						<Route path="/EntryPage" component={EntryPage} />
						<Route path="/FirstPage" component={FirstPage} />
						
					</div>
		        </Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  state: state
})

AppController = connect(mapStateToProps)(AppController);
// AppController = withRouter( connect(mapStateToProps)(AppController) );

export default AppController;

