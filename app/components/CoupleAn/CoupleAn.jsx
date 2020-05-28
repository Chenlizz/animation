import React, { Component } from 'react';
import VS from '../VS/VS';
import './style.scss';

// pure css animation ----新闻
class Couple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftCount: 10,
      rightCount: 10,
      totalCount: 20,
    };
  }

  clickFn = (item, count) => {
    document.querySelector(`.bar .${item} .plus`).className = 'plus';
    const { totalCount } = this.state;
    let timer;
    this.setState({ [count]: this.state[count] + 1, totalCount: totalCount + 1 }, () => {
      const { leftCount, rightCount, totalCount } = this.state;
      document.querySelector('.bar .leftItem').style.width = `${leftCount / totalCount * 100}%`;
      document.querySelector('.bar .rightItem').style.width = `${rightCount / totalCount * 100}%`;
    });
    clearTimeout(timer);
    timer = setTimeout(function () {
      document.querySelector(`.bar .${item} .plus`).className = 'plus increace';
      clearTimeout(timer)
    }, 0)
  }

  render() {
    const { leftCount, rightCount } = this.state;
    const { vsGroup } = this.props;
    return (
      <div className="coupleAn">
        {
          vsGroup || (
            <div className="couple">
              <div className="leftItem">左</div>
              <VS />
              <div className="rightItem">右</div>
            </div>
          )
        }
        <div className="bar">
          <div className="leftItem" onClick={() => this.clickFn('leftItem', 'leftCount')}>
            <span className="iconfont icon-dianzan" />
            <span>{leftCount}</span>
            <span className="plus">+1</span>
          </div>
          <div className="rightItem" onClick={() => this.clickFn('rightItem', 'rightCount')}>
            <span className="plus">+1</span>
            <span>{rightCount}</span> 
            <span className="iconfont icon-dianzan" />
          </div>
        </div>
      </div>
    );
  }
}

export default Couple;