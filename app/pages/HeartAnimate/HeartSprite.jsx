import React, { Component, Fragment } from 'react';
import './heartSprite.scss';

class HeartSprite extends Component {
  handleClick = () => {
    let timer;
    const heart = document.querySelector('.heartSprite');
    const roll = document.querySelector('.roll');
    heart.className = 'heartSprite';
    roll.className = 'roll';
    clearTimeout(timer);
    timer = setTimeout(() => {
      heart.className = 'heartSprite active';
      roll.className = 'roll rollAnimate';
      clearTimeout(timer);
    }, 0);
  }

  showSprite = () => {
    const roll = document.querySelector('.roll');
    console.log(roll);
    roll.id = roll.id === 'showRoll' ? '' : 'showRoll';
  }

  render() {
    return (
      <Fragment>
        <div className="spriteBox">
          <div className="heartSprite" onClick={this.handleClick}></div>
          <div className="roll"></div>
        </div>
        <div className="showSpriteBtn" onClick={this.showSprite}>show sprite</div>
      </Fragment>
    )
  }
}

export default HeartSprite;