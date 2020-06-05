import React, { Component } from 'react';
import JellyButton from '../MilkBtn/JellyButton';
import DownLoad from '../DownLoad/DownLoad';
import Snow from '../SnowDrop/Snow';
import CoupleAn from '../CoupleAn/CoupleAn';
import Parabolic from '../Parabolic/Parabolic';
import HeartSprite from '../HeartAnimate/HeartSprite';
import './style.scss';

class JellyGroup extends Component {
  render() {
    return (
      <div className="jellyGroup">
        <JellyButton />
        <div>
          <div className="jellyBoxParent">
            <div className="jellyBox"></div>
            <div className="shadow"></div>
          </div>
        </div>
        <div className="springAn">
          <p>Spring <br /> Animation</p>
        </div>
        <div className="heartAnParent">
          <HeartSprite />
        </div>
        <div className="downloadBox">
          {/* <DownLoad /> */}
          {/* <Snow /> */}
          {/* <CoupleAn /> */}
        </div>
        <div className="parabolicBox">
          <Parabolic />
        </div>
      </div>
    )
  }
}

export default JellyGroup;