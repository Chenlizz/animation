import React, { Component } from 'react';
import AnimateBall from '../../components/AnimateBall/AnimateBall';
import GravityBall from '../../components/AnimateBall/GravityBall';
import Partical from '../../components/AnimateBall/Partical';
import './style.scss';

class BallGroup extends Component {
  render() {
    return(
      <div className="ballGroup">
        {/* <AnimateBall /> */}
        {/* <GravityBall /> */}
        <Partical />
      </div>
    );
  }
}

export default BallGroup;