import { combineReducers } from 'redux';
// import { routerReducer} from 'react-router-redux'
import reducerA from './reducerA';
import reducerB from './reducerB';

const reducers = combineReducers({
  funcId: reducerA,
  funcData: reducerB //,
  // router: routerReducer
})

export default reducers

