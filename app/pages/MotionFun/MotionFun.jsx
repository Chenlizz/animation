// * t: current time（当前时间）；
// * b: beginning value（初始值）；
// * c: change in value（变化量）；
// * d: duration（持续时间）。
import React, { Component } from 'react';
import Tween from './Tween';
import './style.scss';

class MotionFun extends Component {
  componentDidMount() {
    let t = 0;
    let b = 0;
    let c = 100;
    let d = 4;
    const motionFun = document.querySelector('.motionFun p');
    motionFun.style.transition = `transfrom cubic-bezier(${Tween.Elastic.easeOut(t, b, c, d)}) ${t}s`;
    setTimeout(function () {
      motionFun.style.transfrom = `translateY(${c}px)`;
    }, 100);
  }

  render() {
    return (
      <div className="motionFun">
        <p>Spring <br /> Animation</p>
      </div>
    );
  }
}

export default MotionFun;