import React, { Component } from 'react';
import AnimateBall from '../../components/AnimateBall/AnimateBall';
import GravityBall from '../../components/AnimateBall/GravityBall';
import Partical from '../../components/AnimateBall/Partical';
import ConfettiCannon from '../ConfettiCannon/ConfettiCannon';
import './style.scss';

class BallGroup extends Component {
  render() {
    return (
      <div className="ballGroup">
        <section class="g-word"><AnimateBall /></section>
        <section class="g-img1"></section>
        <section class="g-word"><GravityBall /></section>
        <section class="g-img2"></section>
        <section class="g-word"><Partical /></section>
        <section class="g-img3"></section>
        <section class="g-word"><ConfettiCannon /></section>
      </div>
    );
  }
}

export default BallGroup;