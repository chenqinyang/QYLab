import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={props => (

//     // pass the sub-routes down to keep nesting
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )

class RouteWithSubRoutes extends Component {

	constructor(props) {
	    
	    super(props);

	    console.log("RouteWithSubRoutes ===> ", props);
	}

	render () {
		return (
			<Route path={this.props.path} render={props => (

			    // pass the sub-routes down to keep nesting
			    <this.props.component {...this.props} route={props} />
			  )}/>
		);
	}
}

export default RouteWithSubRoutes