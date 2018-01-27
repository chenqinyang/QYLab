import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* doSomethingA(action) {
   console.log("doSomethingA is triggered.");
   console.log("doSomethingA is triggered .......");
  //  yield call (delay, 3000);
  //  console.log("dosomething is delay ...");
  yield put ({type: "updateFuncData", value: 'hoho'})
  yield call (delay, 3000)
  yield put ({type: "updateFuncTest"})
}

function* doSomethingB(action) {
  console.log("doSomethingB is triggerd.");
}

function* doSomethingC(action) {
  console.log("doSomethingC is triggerd.");
}


function* sagaA() {
  yield takeEvery("updateFuncId", doSomethingA);
  yield takeEvery("updateFuncTest", doSomethingC);
  // yield takeEvery("updateFuncData", doSomethingB);
}

export default sagaA;