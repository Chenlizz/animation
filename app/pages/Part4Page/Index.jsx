import React, { Component } from 'react';
import Snow from '../SnowDrop/Snow';
import Lottie from '../Lottie/lottie';
import CoupleAn from '../CoupleAn/CoupleAn';
import './style.scss';

class Index extends Component {
  render() {
    return (
      <div className="part4Box">
        <div className="snowBox">
          <Snow />
        </div>
        <div className="lottieBox">
          <Lottie />
        </div>
        <div className="coupleBox">
          <CoupleAn />
        </div>
      </div>
    );
  }
}

export default Index;