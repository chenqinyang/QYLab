const initialStateTwo = {
	value : 'NA'
}

const reducerTwo = (state = initialStateTwo, action) => {

  	console.log("reducerTwo state = " , state);
	console.log("reducerTwo action = " , action)

  	switch (action.type) {
	  	case "updateFuncData" :
	  		return Object.assign({}, state, {
		     	value: action.value
		    });
	  	default:
	  		return state;
  	}
}

export default reducerTwo;