import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import Home from './home';
import Navigate from './Navigation/navigate';

const Toolkit = () => {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
};
export default Toolkit;
