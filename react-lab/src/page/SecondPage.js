import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom';
import RouteWithSubRoutes from '../framework/RouteWithSubRoutes';

// Redux integration
import { connect } from 'react-redux';

class SecondPage extends Component {

  constructor(props) {
      
      super(props);

      console.log("SecondPage ===> ", props);

      this.dispatch = props.dispatch;

      // bind event
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

    event.preventDefault();

    this.dispatch({type: "SecondPage"});
    
  }
  
  render() {
    return (
      <div>
        This is SecondPage ya!
        <ul>
	        <li><Link to="/SecondPage/SecondFirst">Second /FirstPage</Link></li>
	    	<li><Link to="/SecondPage/SecondSecond">Second /SecondPage</Link></li>
	    </ul>

        <a href="#" onClick={this.handleClick}>
            {this.props.appState.funcId}
        </a>

	    {this.props.routes.map((route, i) => (
	      <RouteWithSubRoutes key={i} {...route}/>
	    ))}
      </div>
    );
  }
}

SecondPage = connect()(SecondPage);

export default SecondPage;
