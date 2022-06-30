import React from 'react';
import {Provider} from 'react-redux';

import {store} from './store'
import AppNavigator from './navigation/AppNavigator';

const SrcSaga = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default SrcSaga;
