import React, {Component} from 'react';
import { connect } from 'react-redux';

import './App.css';
import Button from './Button/Button';
import EvalWindow from './EvalWindow/EvalWindow';

class App extends Component {

  componentDidMount() {
    let action = { type: 'GET_HISTORY' };
    this.props.dispatch( action );
  }

  render() {
    return (
      <div className="App" >
        <h1>Calculator App</h1>
        <div className="calculator-wrapper" >
          <div className="Window" >
            <EvalWindow />
          </div>
          <div>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>+</Button>
          </div>
          <div>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
          </div>
          <div>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>*</Button>
          </div>
          <div>
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()( App );
