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
    this.body = document.querySelector('body');
    this.distance = 300;
    const children = Array(10).fill(1).map((c, i) => {
      return (<div key={i} className={`addMoneyAnim snow-${i}`}
        style={{
          top: `${Math.random() * -this.distance}px`,
          left: `${Math.random() * (this.body.clientWidth - 52)}px`
        }}
      />);
    })
    this.setState({ children }, () => {
      this.animate();
    });

    this.flag = 0;
  }

  animate = () => {
    const c = this.state.children;
    const childrenTemp = [...c];
    const timer = requestAnimationFrame(this.animate);
    childrenTemp.forEach((item, key) => {
      let dx = Math.random();
      let dy = Math.random() * 10;
      let top = Number(item.props.style.top.slice(0, -2));
      let left = Number(item.props.style.left.slice(0, -2));
      if(left - dx < 0 || left + dx + 52 > this.body.clientWidth) {
        dx = -dx;
      }
      item.key = `${Number(item.key) + 1}`;
      item.props.style.top = `${top + dy}px`;
      item.props.style.left = `${left + dx}px`;
      // item.props.style.backgroundPositionX = `-${((Math.floor(Math.random()*10+1)) % 8)*52}px`;
      // item.props.style.backgroundPositionY = `-${Math.floor((Math.floor(Math.random()*10+1)) / 8)*52}px`;
      console.log(item.key, item);
      if (top > this.body.clientHeight + this.distance + 52) {
        this.flag++;
        if (this.flag === childrenTemp.length) {
          cancelAnimationFrame(timer);
        }
        return;
      }
    })
    this.setState({ children: childrenTemp });
  }

  render() {
    return (
      <div className="snow-demo-wrapper">
        <div className={`snow-demo`}>
          {this.state.children}
        </div>
      </div>
    );
  }
}

export default Snow;