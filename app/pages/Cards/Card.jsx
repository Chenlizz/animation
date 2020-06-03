import React, { Component } from 'react';
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
      <div className="cardsBox">
        <div className={`${active === 1 ? 'active' : 'cardHover'} card`} onClick={() => this.handleClick(1)}>
          <div class="number">
            <code>6214 ******** 3266</code>
          </div>
          <div class="due-date">
            Due 11/19
          </div>
        </div>
        <div className={`${active === 2 ? 'active' : 'cardHover'} card`} onClick={() => this.handleClick(2)}>
          <div class="number">
            <code>6214 ******** 3266</code>
          </div>
          <div class="due-date">
            Due 11/19
          </div>
        </div>
        <div className={`${active === 3 ? 'active' : 'cardHover'} card`} onClick={() => this.handleClick(3)}>
          <div class="number">
            <code>6214 ******** 3266</code>
          </div>
          <div class="due-date">
            Due 11/19
          </div>
        </div>
        <div className={`${active === 4 ? 'active' : 'cardHover'} card`} onClick={() => this.handleClick(4)}>
          <div class="number">
            <code>6214 ******** 3266</code>
          </div>
          <div class="due-date">
            Due 11/19
          </div>
        </div>
      </div>
    );
  }
}

export default Card;