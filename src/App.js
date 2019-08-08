import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      Welcome to Redux!
      <ul>
        <li>Counter : {counter}</li>
        <li> Am I logged in ? : {isLogged}</li>
      </ul>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch(increment(5))}
      >
        Increment
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch(decrement())}
      >
        {' '}
        Decrement{' '}
      </button>
    </div>
  );
}

export default App;
