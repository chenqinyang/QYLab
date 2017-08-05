import React, { Component } from 'react';

// Redux integration
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { routerMiddleware, push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';

import history from '../framework/History';

class EntryPage extends Component {

	constructor(props) {
	    
	    super(props);

	    console.log("EntryPage.props = ", props);

	    this.dispatch = props.dispatch;

	    // bind event
	    this.handleClick = this.handleClick.bind(this);
	    this.handleContinue = this.handleContinue.bind(this);
	}

	handleClick(event) {

		console.log("EntryPage.handleClick ," , event.target.value);

		this.props.handleClick(event.target.value);
	}

	handleContinue(event) {

		console.log("EntryPage.handleContinue ," , event);

		event.preventDefault();

		this.props.handleContinue(event);

		this.props.history.push('/FirstPage');
	}
  
  	render() {

  		let radioOptions = [
  			{
  				name : 'optionsRadios',
  				id : 'optionsRadios1',
  				value : 'page1',
  				text : 'Go to a page destination. ',
  				checked : false
  			},
  			{
  				name : 'optionsRadios',
  				id : 'optionsRadios2',
  				value : 'page2',
  				text : 'Go to a page which has sub page',
  				checked : false
  			}
  		];

  		for (let i=0; i<radioOptions.length;i++) {
  			if (this.props.funcData && this.props.funcData.value === radioOptions[i].value) {
  				radioOptions[i].checked = true;
  			} else {
  				radioOptions[i].checked = false;
  			}
  		}
  		

	    return (

	    	<div>

	    		{console.log("EntryPage.props in render = ", this.props)}

		    	<ul className="nav nav-tabs">
				  <li role="presentation" className="active"><a href="#">EntryPage</a></li>
				</ul>



				<form>

				{radioOptions.map((item, index) => {
                    return(
                    	<div className="radio" key={index}>
							<label>
							<input type="radio" name={item.name} id={item.id} value={item.value} onClick={this.handleClick} checked={item.checked} />
								{item.text}
							</label>
						</div>
                    )
                })}

				<button type="button" className="btn btn-primary" onClick={this.handleContinue}>Continue {this.props.funcData.value}</button>
				</form>

	      	</div>

	    );
  	}
}

const mapStateToProps = (state) => ({
  funcData: state.funcData
})

const mapDispatchToProps = dispatch => {
	return {

	  handleClick: value => {
	  	dispatch({type: "updateFuncData", value : value});
	  },

	  handleContinue: event => {
	  	dispatch( {type: "updateFuncId", value : 'QY_' + (new Date())} );
	  }
	}
}

EntryPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(EntryPage));
// EntryPage = connect(mapStateToProps, mapDispatchToProps)(EntryPage);

export default EntryPage;
