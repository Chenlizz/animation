import React, { Component } from 'react';
import JellyButton from '../MilkBtn/JellyButton';
import DownLoad from '../DownLoad/DownLoad';
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
          {/* <HeartAnimate /> */}
        </div>
        <div className="downloadBox">
          <DownLoad />
        </div>
      </div>
    )
  }
}

export default JellyGroup;