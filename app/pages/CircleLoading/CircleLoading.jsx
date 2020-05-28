import React, { Component } from 'react';

class CircleLoading extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      const percent = 85.0; // 最终百分比
      const circleX = canvas.width / 2; // 中心x坐标
      const circleY = canvas.height / 2; // 中心y坐标
      const radius = 100; // 圆环半径
      const lineWidth = 20; // 圆形线条的宽度
      const fontSize = 50; // 字体大小
      let process = 0.0; // 进度

      (function () {
        Object.getPrototypeOf(ctx).circleLoading = function () {
          if (process >= percent) {
            clearInterval(circleLoading);
          }

          ctx.clearRect(0, 0, circleX * 2, circleY * 2);

          ctx.font = fontSize + 'px April';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#999';
          ctx.fillText(parseFloat(process).toFixed(0) + '%', circleX, circleY);

          ctx.beginPath();
          ctx.moveTo(circleX + radius, circleY);
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = '#eee';
          ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
          ctx.closePath();
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(circleX, circleY + radius);
          ctx.lineWidth = lineWidth;

          // 渐变
          var linGrad = ctx.createLinearGradient(
            circleX, circleY - radius - lineWidth, circleX, circleY + radius + lineWidth
          );
          linGrad.addColorStop(0.0, '#ec847a');
          linGrad.addColorStop(0.5, '#9bc4eb');
          linGrad.addColorStop(1.0, '#eccd23');
          ctx.strokeStyle = linGrad;
          ctx.lineCap = 'round'; // 圆弧两端的样式

          // 圆弧
          ctx.arc(
            circleX, circleY, radius,
            0 * (Math.PI / 180.0) + (Math.PI / 2), // 从圆形底部开始画
            (process / 100 * 360) * (Math.PI / 180.0) + (Math.PI / 2), 
          );
          ctx.stroke();

          // 控制结束时动画的速度
          if (process / percent > 0.90) {
            process += 0.30;
          } else if (process / percent > 0.80) {
            process += 0.55;
          } else if (process / percent > 0.70) {
            process += 0.75;
          } else {
            process += 1.0;
          }
          requestAnimationFrame(ctx.circleLoading); // 触发动画语句
        }
      }())
      ctx.circleLoading();
    }
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvas} width="300" height="300" />
      </div>
    );
  }
}

export default CircleLoading;