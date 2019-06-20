// this reducer stores an expression

const expression = ( state =  '', action ) => {
  if ( action.type === 'EVALUATE_EXPRESSION' ) {
    console.log( action.payload );
  } else {
    return state;
  }
}

export default expression;