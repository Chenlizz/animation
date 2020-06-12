import React, { Component } from 'react';
import BallGroup from './BallGroup/BallGroup';
import JellyGroup from './JellyGroup/JellyGroup';
import SubWay from './SubWay/SubWay';
import ThreePlanet from './ThreePlanet/ThreePlanet';
import CardsIndex from './Cards/index';
import Part4Page from './Part4Page/Index';
import './style.scss';

const types = ['fade', 'slide', 'slideUp', 'zoom', 'flipX', 'flipY'];
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'fade',
    }
  }

  onClick = (e) => {
    this.setState({ active: e });
  }

  render() {
    const { active } = this.state;
    return (
      <div className="login">
        <div className={`page ${active === 'fade' ? 'fade' : 'fadeLeave'}`}>
          {
            active === 'fade' ? <BallGroup /> : ''
          }
        </div>
        <div className={`page ${active === 'slide' ? 'slide' : 'slideLeave'}`}>
          {
            active === 'slide' ? <JellyGroup /> : ''
          }
        </div>
        <div className={`page ${active === 'slideUp' ? 'slideUp' : 'slideUpLeave'}`}>
          {
            active === 'slideUp' ? <CardsIndex /> : ''
          }
        </div>
        <div className={`page ${active === 'zoom' ? 'zoom' : 'zoomLeave'}`}>
          {
            active === 'zoom' ? <Part4Page /> : ''
          }
        </div>
        <div className={`page ${active === 'flipX' ? 'flipX' : 'flipXLeave'}`}>
          {
            active === 'flipX' ? <SubWay /> : ''
          }
        </div>
        <div className={`page ${active === 'flipY' ? 'flipY' : 'flipYLeave'}`}>
          {
            active === 'flipY' ? <ThreePlanet /> : ''
          }
        </div>

        <div className="buttons">
          {
            types.map((item, key) => {
              return <div className={`${active === item ? 'active' : ''}`} onClick={() => this.onClick(item)}>
                <p>{`part ${key + 1}`}</p>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default Login;