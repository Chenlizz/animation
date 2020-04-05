import React, { Component } from 'react';
import lottie from 'lottie-web';
import './style.scss';

class Lottie extends Component {
  componentDidMount() {
    const learning = document.querySelector('.learning');
    lottie.loadAnimation({
      container: learning, // 包含动画的dom元素
      renderer: 'svg', //渲染出来的是什么格式svg、canvas、html
      loop: true,  //循环播放
      autoplay: true, //自动播放
      path: './pages/Lottie/jsons/18365-animaton-for-e-learning-web-site.json' // 动画json的路径
    });

    const developer = document.querySelector('.developer');
    lottie.loadAnimation({
      container: developer, // 包含动画的dom元素
      renderer: 'svg', //渲染出来的是什么格式svg、canvas、html
      loop: true,  //循环播放
      autoplay: true, //自动播放
      path: './pages//Lottie/jsons/18123-developer.json'
    });

    this.slide();
  }

  slide = () => {
    let startx, starty, movex, distancex;
    let index = 0;
    let boxCount = document.getElementsByClassName('slideBox').length;
    let outerBox = document.querySelector('.outerBox');
    let width = outerBox.offsetWidth;
    let imageBox = document.querySelector('.lottieGroup');
    let pointGroup = document.querySelector('.pointGroup');
    let points = pointGroup.querySelectorAll('div');

    //改变当前样式  当前图片的索引（小圆点）
    var setPoint = function () {
      //清除上一次的now
      for (var i = 0; i < points.length; i++) {
        points[i].className = " ";
      }
      //给图片对应的点加上样式
      points[index].className = "active";
    }

    //设置图片的位置，定位（CSS3 transform 属性）
    let setTranslateX = function (translateX) {
      imageBox.style.transform = "translateX(" + translateX + "px)";
      imageBox.style.webkitTransform = "translateX(" + translateX + "px)";
    }

    //获得角度
    function getAngle(angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    };

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
      let angx = endx - startx;
      let angy = endy - starty;
      let result = 0;

      //如果滑动距离太短
      if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
      }

      let angle = getAngle(angx, angy);
      if (angle >= -135 && angle <= -45) {
        result = 1;
      } else if (angle > 45 && angle < 135) {
        result = 2;
      } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
      } else if (angle >= -45 && angle <= 45) {
        result = 4;
      }

      return result;
    }

    //手指接触屏幕
    document.addEventListener("touchstart", function (e) {
      startx = e.touches[0].pageX;
      starty = e.touches[0].pageY;
    }, false);

    //手指离开屏幕
    document.addEventListener("touchend", function (e) {
      let endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      let direction = getDirection(startx, starty, endx, endy);

      if (direction !== 0 && Math.abs(distancex) > width / 4) {
        if (direction === 3) {
          if (index === (boxCount - 1)) {
            return setTranslateX(-index * width);
          }
          index++;
        } else if (direction === 4) {
          if (index === 0) {
            return setTranslateX(-index * width);
          }
          index--;
        }
      }
      setTranslateX(-index * width);    //定位
      setPoint();
    }, false);

    document.addEventListener('touchmove', function (e) {
      movex = e.touches[0].clientX;   //滑动时候的X
      distancex = movex - startx; //计算移动的距离
      setTranslateX(-index * width + distancex);  //实时的定位
    });
  }

  render() {
    return (
      <div className="outerBox">
        <div className="lottieGroup">
          <div className="slideBox">
            <div class="learning"></div>
            <div className="text">
              <div>全新改版</div>
              <div>全面优化体验，操作更便捷</div>
            </div>
          </div>

          <div className="slideBox">
            <div class="developer"></div>
            <div className="text">
              <div>全新改版</div>
              <div>全面优化体验，操作更便捷</div>
            </div>
          </div>
        </div>
        <div className="pointGroup">
          <div className="active" />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Lottie;