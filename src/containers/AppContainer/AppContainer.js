import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppStore from '../../config/store';
import Routing from '../../config/routing'

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={AppStore}>
        <Routing />
      </Provider>
    );
  }
}
