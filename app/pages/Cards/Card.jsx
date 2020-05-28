import React, { Fragment, Component } from 'react';
import Card2 from './Card2';
import './card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }
  handleClick = (flag) => {
    this.setState({
      active: flag
    });
  }

  render() {
    const { active } = this.state;
    return (
      <Fragment>
        <div className="cardsBox">
          <div className={`${active === 1 ? 'active' : 'cardHover'} card`} onClick={() => this.handleClick(1)}>
            <div className="account">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlinkHref="#icon--yingguo"></use>
              </svg>
              {/* <span>美元账户</span> */}
            </div>
            <span>
              <span>账面盈亏</span>
              <span>-168.00 USD</span>
            </span>
          </div>
          <div className={`${active === 2 ? 'active' : 'cardHover'} card`} onClick={() => this.handleClick(2)}>
            <div className="account">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlinkHref="#icon--wukelan"></use>
              </svg>
              <span>美元账户</span>
            </div>
            <span>
              <span>账面盈亏</span>
              <span>-168.00 USD</span>
            </span>
          </div>
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

        <Card2 />
      </Fragment >
    );
  }
}

export default Card;