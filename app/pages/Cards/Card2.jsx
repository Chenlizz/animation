import React, { Component } from 'react';
import './card2.scss';

class Card2 extends Component {
  constructor(props) {
    super(props);
    this.state={
      active: 0
    };
  }
  handleClick = () => {

  }

  render() {
    const { active } = this.state;
    return (
      <div className="cardBox">
        <div className="cardHolder" onClick={this.handleClick} />
        <div className={`${active === 3 ? 'active' : 'cardHover'} card`} onClick={() => this.handleClick(3)}>
          <div className="account">
            <svg class="icon svg-icon" aria-hidden="true">
              <use xlinkHref="#icon--zhongguo"></use>
            </svg>
            <span>美元账户</span>
          </div>
          <span>
            <span>账面盈亏</span>
            <span>-168.00 USD</span>
          </span>
        </div>
        <div className={`${active === 4 ? 'active' : 'cardHover'} card`} onClick={() => this.handleClick(4)}>
          <div className="account">
            <svg class="icon svg-icon" aria-hidden="true">
              <use xlinkHref="#icon--meiguo"></use>
            </svg>
            <span>美元账户</span>
          </div>
          <span>
            <span>账面盈亏</span>
            <span>-168.00 USD</span>
          </span>
        </div>
      </div>
    )
  }
}

export default Card2;
