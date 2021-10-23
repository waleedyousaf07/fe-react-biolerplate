import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.scss';
import DummyComponent from './features/dummyComponent/DummyComponent.container';

const queryClient = new QueryClient();

const App = () => (
  <div className="app">
    <h1>Heyy!</h1>
    <DummyComponent />
  </div>
);

const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default AppWrapper;
