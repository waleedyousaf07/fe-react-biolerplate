import React from 'react';
import PropTypes from 'prop-types';

function DummyComponent(props) {
  const {
    counter,
    increment,
    decrement,
    incrementByAmount,
  } = props;

  return (
    <>
      <h3>
        My dummy component with counter value: {counter}
      </h3>
      <div>
        <button className="margin-sm" type="button" onClick={() => increment()}>Increment</button>
        <button className="margin-sm" type="button" onClick={() => decrement()}>Decrement</button>
        <button className="margin-sm" type="button" onClick={() => incrementByAmount(16)}>Increment By 16</button>
      </div>
    </>
  );
}

DummyComponent.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementByAmount: PropTypes.func.isRequired,
};

export default DummyComponent;
