import React, { Component } from 'react';
import { connect } from 'react-redux';


// parent component: App
class NumberButton extends Component {

  handleClick = ( char ) => {
    console.log('this.props:', this.props);
  }

  renderButton = () => {
    return(
      <button>{ this.props.children }</button>
    );
  }

  render() {
    return (
      <>
        { this.renderButton() }
      </>
    );
  }
}

// map reducers to props
const mapStateToProps = ({ expression }) => ({ expression });

export default connect( mapStateToProps )( NumberButton );
