import React, { Component } from 'react';
import {
  HashRouter, Switch, Route, Redirect, hashHistory,
} from 'react-router-dom';
import MilkBtn from '../pages/MilkBtn/MilkBtn';
import Buttons from '../pages/MilkBtn/Buttons';
import WeatherCard from '../pages/WeatherCard/WeatherCard';
import Clock from '../pages/Clock/Clock';
import JellyGroup from '../pages/JellyGroup/JellyGroup';
import BallGroup from '../pages/BallGroup/BallGroup';
import loading from '../pages/Icons/Loading';
import HeartAnimate from '../pages/HeartAnimate/HeartAnimate';
import CoupleAn1 from '../pages/CoupleAn/CoupleAn1';

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
              <Route path="/" exact component={BallGroup} />
              <Route path="/HeartAnimate" exact component={HeartAnimate} />
              {/* vs */}
              <Route path="/CoupleAn1" exact component={CoupleAn1} />
              {/* <Route path="/CoupleAn" exact component={CoupleAn} /> */}
              {/* vs */}

              <Route path="/loading" exact component={loading} />
              {/* <Route path="/BallGroup" exact component={BallGroup} />
              <Route path="/Lottie" exact component={Lottie} />
              <Route path="/snow" exact component={Snow} />
              <Route path="/MilkBtn" exact component={MilkBtn} />
              <Route path="/index" exact component={Login} />
              <Route path="/Buttons" exact component={Buttons} /> */}
              <Route path="/JellyGroup" exact component={JellyGroup} />
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