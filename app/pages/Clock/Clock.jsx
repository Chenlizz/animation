import React, { Component } from 'react';
import './style.scss';

class Clock extends Component {
  constructor() {
    super();
    this.canvas = React.createRef();
  }
  componentDidMount() {
    const clockCanvas = this.canvas.current;
    const { clockRadius } = this.props;
    if (clockCanvas.getContext) {
      const ctx = clockCanvas.getContext('2d');
      (function () {
        Object.getPrototypeOf(ctx).Clock = function () {
          let date = new Date();
          let hours = date.getHours();
          let minutes = date.getMinutes();
          let seconds = date.getSeconds();
          hours = hours > 12 ? hours - 12 : hours;
          let hour = hours + minutes / 60;
          let minute = minutes + seconds / 60;
          const canvasWidth = ctx.canvas.width;
          const canvasHeight = ctx.canvas.height;
          const tickMark = '#d9d9d9'; // 刻度线颜色

          ctx.save();
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx.fillStyle = '#d2d8df';
          ctx.strokeStyle = '#d2d8df';
          ctx.arc(canvasWidth / 2, canvasHeight / 2, clockRadius, -Math.PI / 2, Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.restore();

          ctx.save();
          ctx.beginPath();
          ctx.fillStyle = 'white';
          ctx.strokeStyle = 'white';
          ctx.arc(canvasWidth / 2, canvasHeight / 2, clockRadius, Math.PI, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.restore();

          ctx.save();
          ctx.beginPath();
          ctx.fillStyle = 'white';
          ctx.strokeStyle = 'white';
          ctx.arc(canvasWidth / 2, canvasHeight / 2, clockRadius - 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.restore();

          ctx.save();
          ctx.beginPath();
          ctx.fillStyle = '#15162d';
          ctx.strokeStyle = '#15162d';
          ctx.arc(canvasWidth / 2, canvasWidth / 2, clockRadius - 15, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.restore();

          // 长刻度线
          ctx.save();
          ctx.beginPath();
          ctx.translate(canvasWidth / 2, canvasHeight / 2);
          ctx.fillStyle = tickMark;
          ctx.strokeStyle = tickMark;
          for (let n = 0; n <= 60; n = n + 5) {
            ctx.rotate(30 * (Math.PI / 180));
            ctx.fillRect(-1.5, (clockRadius - 15) * 0.86, 3, 12);
          }
          ctx.restore();

          // 短刻度线
          ctx.save();
          ctx.beginPath();
          ctx.translate(canvasWidth / 2, canvasHeight / 2);
          ctx.fillStyle = tickMark;
          ctx.strokeStyle = tickMark;
          for(let n = 0; n < 74; n++) {
            if(n % 5 !== 0) {
              ctx.rotate(6 * Math.PI / 180);
              ctx.fillRect(-1.5, (clockRadius - 15) * 0.85 + 9, 3, 3);
            }
          }
          ctx.restore();

          ctx.save();
          ctx.translate(canvasWidth / 2, canvasHeight / 2);

          ctx.save();
          // 画 时
          let hTheta = (hour - 3) * 2 * Math.PI / 12;
          ctx.rotate(hTheta);
          ctx.beginPath();
          ctx.moveTo(0, -4);
          ctx.lineTo(0, 4);
          ctx.lineTo(clockRadius * 0.4, 4);
          ctx.lineTo(clockRadius * 0.5, 0);
          ctx.lineTo(clockRadius * 0.4, -4);
          ctx.fillStyle = '#fff';
          ctx.fill();
          ctx.restore();

          // 画 分
          ctx.save();
          let mTheta = (minute - 15) * 2 * Math.PI / 60;
          ctx.rotate(mTheta);
          ctx.beginPath();
          ctx.moveTo(0, -4);
          ctx.lineTo(0, 4);
          ctx.lineTo(clockRadius * 0.7, 4);
          ctx.lineTo(clockRadius * 0.8, 0);
          ctx.lineTo(clockRadius * 0.7, -4);
          ctx.fillStyle = '#fff';
          ctx.fill();
          ctx.restore();

          // 画 秒
          ctx.save();
          let sTheta = (seconds - 15) * 2 * Math.PI / 60;
          ctx.rotate(sTheta);
          ctx.beginPath();
          ctx.arc(0, 0, 5, 0, Math.PI * 2);
          ctx.fillStyle = '#f16b41';
          ctx.fill();
          ctx.moveTo(-15, -2);
          ctx.lineTo(-15, 2);
          ctx.lineTo(clockRadius * 0.8, 2);
          ctx.arc(clockRadius * 0.8, 0, 1.5, 0, Math.PI * 2, 1);
          ctx.lineTo(clockRadius * 0.8, -2);
          ctx.fillStyle = '#f16b41';
          ctx.fill();
          ctx.restore();

          ctx.restore();
          requestAnimationFrame(ctx.Clock);
        }
      }());
      ctx.Clock();
    }
  }

  render() {
    const { width, height } = this.props;
    return (
      <canvas ref={this.canvas} width={width} height={height}></canvas>
    )
  }
}

export default Clock;