import React, { Component } from 'react';
import { connect } from 'react-redux';

// parent component: App
class EvalWindow extends Component {

  render() {
    return (
      <>
        <input></input>
      </>
    );
  }
}

// map reducers to props
const mapStateToProps = ({ expression }) => ({ expression });

export default connect( mapStateToProps )( EvalWindow );
