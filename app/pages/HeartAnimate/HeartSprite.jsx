import React, { Component } from 'react';
import './heartSprite.scss';

class HeartSprite extends Component {
  handleClick = () => {
    let timer;
    const heart = document.querySelector('.heartSprite');
    heart.className = 'heartSprite';
    clearTimeout(timer);
    timer = setTimeout(() => {
      heart.className = 'heartSprite active';
      clearTimeout(timer);
    }, 0);
  }
  
  render () {
    return (
      <div className="heartSprite" onClick={this.handleClick}></div>
    )
  }
}

export default HeartSprite;