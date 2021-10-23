import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import getUsers from './dummyComponent.api';

function DummyComponent(props) {
  const {
    counter,
    increment,
    decrement,
    incrementByAmount,
  } = props;

  const {
    data: users,
    status,
    isFetching,
    isLoading,
  } = useQuery(['users', 2], () => getUsers({ page: 2 }), {
    // staleTime: 5000,
    // eslint-disable-next-line no-alert
    onError: () => alert('Something went wrong'),
  });

  if (isLoading) return `Loading data... ${status}`;
  if (isFetching) return `Fetching data... ${status}`;

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

      <ul>
        {users?.results?.map((user) => <li key={user.name}>{user.name}</li>)}
      </ul>
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
