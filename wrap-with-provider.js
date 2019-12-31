import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/store/createStore';

const { store } = createStore();

export default ({ element }) => ( // remember, elements are complex objects so you must specify that it's an object when it is used as a function argument
  <Provider store={store}>
    {element}
  </Provider>
);