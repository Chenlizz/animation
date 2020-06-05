import React, { Component } from 'react';
import './style.scss';

class Snow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
    };
  }

  componentDidMount() {
    const body = document.querySelector('.snow-demo');
    this.snow = body && body.getElementsByClassName('addMoneyAnim');
  }

  handleClick = () => {
    console.log('click');
  }

  startAn = () => {
    for (let i = 0; i < this.snow.length; i++) {
      if (this.snow[i].className.indexOf('start') > 0) {
        this.snow[i].className = this.snow[i].className.slice(0, 20);
        setTimeout(() => {
          this.snow[i].className += ' start';
        }, 100);
      } else {
        this.snow[i].className += ' start';
      }
    }
  }

  render() {
    return (
      <div className="snow-demo-wrapper">
        <div className={`snow-demo`}>
          {
            Array(10).fill(1).map((item, key) => {
              return (
                <div key={key} className={`addMoneyAnim snow-${key}`} onClick={this.handleClick} />
              );
            })
          }
        </div>
        <div className="btn" onClick={this.startAn}>存入</div>
      </div>
    );
  }
}

export default Snow;