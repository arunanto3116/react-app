import React, { Component } from 'react';
import { Router, Route, withRouter } from "react-router-dom";
import history from './history';
import loadable from '@loadable/component'

const Login = loadable(() =>
  import(/*webpackPrefetch: true *//* webpackChunkName: "login" */ '../containers/Login/Login.mapper'),
)

const Home = loadable(() =>
  import(/*webpackPrefetch: true *//* webpackChunkName: "home" */ '../containers/Home/Home.mapper'),
)

import {TestContainer} from '../containers/TestContainer/TestContainer';
import AppTemplate from '../components/AppTemplate/AppTemplate.mapper';

export default class Routing extends Component {
  render() {
    return (
    <Router history={history}>
        {/* <AppTemplate> */}
            {/* <Route path={''} exact={true} component={withRouter(Home)} />
            <Route path={'/login'} exact={true} component={withRouter(Login)} /> */}
        {/* </AppTemplate> */}
        <Route path={''} exact={true}  >
              <TestContainer name="arun" place="chevoor" time="5:30pm" showDetails={true}/>
            </Route>
    </Router>
    );
  }
}