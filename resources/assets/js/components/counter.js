import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  handleAddMoreClick(e){
    var addMoreVal = ReactDOM.findDOMNode(this.refs.counterVal).value|0;
    this.props.addMore(addMoreVal);
  }
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, addMore } = this.props
    return (
      <p>
        Clicked: {counter} times
        {''}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={incrementAsync}>Increment async</button>
        <input ref="counterVal" />
        <button onClick={this.handleAddMoreClick.bind(this)}>Add more</button>
      </p>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  addMore : PropTypes.func.isRequired
}

export default Counter
