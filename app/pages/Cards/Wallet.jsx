import React, { Component } from 'react';
import './wallet.scss';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  handleClick = e => {
    this.setState({ active: e });
  }

  render() {
    const { active } = this.state;
    return (
      <div className="walletContainer">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="title">Wallet</p>
        <div className="cards">
          <div className={`${active === 1 ? 'active' : (active !== 0 ? 'out' : '')} card`} onClick={() => this.handleClick(1)}>
            <div class="number">
              <code>6214 ******** 3266</code>
            </div>
            <div class="due-date">
              Due 11/19
            </div>
          </div>
          <div className={`${active === 2 ? 'active' : (active !== 0 ? 'out' : '')} card`} onClick={() => this.handleClick(2)}>
            <div class="number">
              <code>6214 ******** 3266</code>
            </div>
            <div class="due-date">
              Due 11/19
            </div>
          </div>
          <div className={`${active === 3 ? 'active' : (active !== 0 ? 'out' : '')} card`} onClick={() => this.handleClick(3)}>
            <div class="number">
              <code>6214 ******** 3266</code>
            </div>
            <div class="due-date">
              Due 11/19
            </div>
          </div>
        </div>
        {/* <div className="details">
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
        </div> */}
      </div>
    )
  }
}

export default Wallet;