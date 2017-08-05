import React, { Component } from 'react';

class Header extends Component {

  // constructor(props) {
  //     super(props);
  // }

  render() {
    return (

      <div className="container">
       
       	<nav className="navbar navbar-inverse navbar-fixed-top">
	      <div className="container">
	        <div className="navbar-header">
	          <a className="navbar-brand" href="#">React Lab</a>
	        </div>
	      </div>
        </nav>
      </div>
       
    );
  }
}

export default Header;
