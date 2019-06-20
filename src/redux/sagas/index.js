import { all } from 'redux-saga/effects';
import historySaga from './historySaga';

// rootSaga is the primary saga for this entire project
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga.

// some sagas trigger other sagas
export default function* rootSaga() {
  yield all([
    // sagas go here
    historySaga(),
  ]);
}
