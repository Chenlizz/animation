import React, { Component } from 'react';
import {
  HashRouter, Switch, Route, Redirect, hashHistory,
} from 'react-router-dom';
import Login from '../pages/Login';
import BallGroup from '../pages/BallGroup/BallGroup';
import Snow from '../pages/SnowDrop/Snow';

export default class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paramsReady: true,
    };
  }

  render() {
    return (
      <HashRouter history={hashHistory}>
        {
          this.state.paramsReady ? (
            <Switch>
              <Route path="/" exact component={Snow} />
              <Route path="/BallGroup" exact component={BallGroup} />
              <Route path="/index" exact component={Login} />
              <Redirect to="/" />
            </Switch>
          ) : <NoReady />
        }
      </HashRouter>
    );
  }
}

const NoReady = () => {
  <div className="router-nav">
    <div className="page-title">
      <span>加载出错...</span>
    </div>
  </div>
}