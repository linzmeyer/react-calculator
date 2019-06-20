import { combineReducers } from 'redux';
import expression from './expression';

// rootReducer is the primary reducer for this entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootReducer

// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  expression,
});

export default rootReducer;
