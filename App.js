import React, {Component} from 'react';
import AppContainer from './app/container/AppContainer';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import shopItemsReducers from './app/redux/reducers/shopItemsReducers';

const storeWithMiddleware = applyMiddleware(thunk)(createStore);
const store = storeWithMiddleware(shopItemsReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
