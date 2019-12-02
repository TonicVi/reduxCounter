import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'ADD' }),
  decrement: () => dispatch({ type: 'REMOVE' }),
  reset: () => dispatch({ type: 'RESETCOUNTER' })
});

const CountComponent = ({ count, increment, decrement, reset }) => (
  <div>
    <p>{count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CountComponent);
