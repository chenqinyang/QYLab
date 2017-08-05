const reducerOne = (state = 'default', action) => {

	console.log("reducerOne state = " , state);
	console.log("reducerOne action = " , action)

  	switch (action.type) {
	  	case "updateFuncId" :
	  		return action.value;
	  	default:
	  		return state;
  	}
}

export default reducerOne;