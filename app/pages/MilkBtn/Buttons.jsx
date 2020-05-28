import React, { Component } from 'react';
import './buttons.scss';

class Button extends Component {
  componentDidMount() {
    document.querySelector('.button').onmousemove = (e) => {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;

      e.target.style.setProperty('--x', `${x}px`);
      e.target.style.setProperty('-y', `${y}px`);
    }
  }

  render() {
    return (
      <div className="buttons">
        <div className="button">
          <span>Hover me</span>
        </div>
      </div>
    );
  }
}

export default Button;