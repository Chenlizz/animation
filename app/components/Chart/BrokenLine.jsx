import React, { Component } from 'react';
import './style.scss';

let typeArr = ['7天', '1个月', '3个月', '6个月'];
class BrokenLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      buyAmount: [{ date: '07/06', value: 94.5 },
      { date: '07/07', value: 95.8 },
      { date: '07/08', value: 94.8 },
      { date: '07/09', value: 97.8 },
      { date: '07/10', value: 95.3 },
      { date: '07/11', value: 96.8 },
      { date: '07/12', value: 95.4 }],
      buyRate: [],
    };
  }

  componentDidMount() {
    const myCanvas = document.querySelector('#myCanvas');
    if (!myCanvas.getContext) return;
    this.ctx = myCanvas.getContext('2d');
    this.paddingX = 100; // 两侧留白
    this.lineSum = 6; //线总数
    this.diffH = 80;//每条线之间的高度
    console.log(myCanvas.width);

    this.drawBuyLine();
    this.drawBuyRate();
  }

  // 客户买入净价
  drawBuyLine() {
    const { buyAmount } = this.state;
    const XlineWidth = myCanvas.width - 2 * this.paddingX;
    this.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    this.ctx.font = '30px sans-serif';
    console.log(myCanvas);

    // 走势图坐标线
    for (let i = 1; i < this.lineSum; i++) {
      this.ctx.fillStyle = '#666';
      this.ctx.textAlign = 'end';
      this.ctx.fillText((100 - 2 * (i - 1)).toFixed(2), this.paddingX - 10, (i * this.diffH) + 10);
      this.ctx.textAlign = 'start';
      this.ctx.fillText((7 - i).toFixed(3), (myCanvas.width - this.paddingX - 10), (i * this.diffH + 10));
      this.ctx.fillStyle = '#eee';
      this.ctx.fillRect(this.paddingX, i * this.diffH, myCanvas.width - 2 * this.paddingX, 1);
    }

    let that = this;
    buyAmount.forEach((point, i) => {
      if(i < buyAmount.length) {
        that.ctx.save();
        let wordWidth = that.ctx.measureText( point.date ).width;
        that.ctx.fillStyle = '#666';
        that.ctx.fillText(point.date !== undefined ? point.date : '', );

      }
    });
  }

  // 客户买入收益率
  drawBuyRate() {

  }

  changeType = (index) => {
    this.setState({
      type: index,
    });
  }

  render() {
    const { type } = this.state;
    const w = window.innerWith || document.documentElement.clientWidth || document.body.clientWidth;
    const chartWidth = w - 80;
    return (
      <div className="brokenLine">
        <div className="title">走势图</div>
        <div className="timeRange">
          {
            typeArr.map((item, index) => {
              return (
                <span className={type === index ? 'activeType' : ''} onClick={() => this.changeType(index)}>
                  {item}
                </span>
              );
            })
          }
        </div>
        <canvas id="myCanvas" width={chartWidth} height="600" />
      </div>
    );
  }
}

export default BrokenLine;