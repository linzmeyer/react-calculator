import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GET history from server from db
function* getHistory( action ) {
  try {
    const response = yield axios.get( '/api/history' );
    // create action that will store the response inside of the history reducer
    action = { type: 'SET_HISTORY', payload: response };
    // perform action
    yield put( action );
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* historySaga() {
  yield takeLatest('GET_HISTORY', getHistory);
}

export default historySaga;


///////////////////////////////////////////////////////////////////////////////
// WHERE WAS I? I'm on the get-history branch creating a get history saga to
// the db and see if my pool is working properly.
// todos:
// create getHistory server side route, create history reducer, import 
// historySaga into index js...etc.
