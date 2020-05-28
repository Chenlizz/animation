import React, { Component } from 'react';
import Buttons from '../MilkBtn/Buttons';
import './style.scss';

// 确保您始终声明您在XML文件中使用的命名空间。
// 如果不这样做，Firefox等用户代理将无法识别您的内容，只会显示XML标记或通知用户XML中有错误。
class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="title">/ 图标</div>
        <div className="svgParent">
          {/* Loader 1 */}
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
            <circle fill="none" stroke="#fff" stroke-width="4" cx="50" cy="50" r="48" />
            <line fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" x1="50" y1="50" x2="85" y2="50.5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="2s"
                from="0 50 50" // [angle] [px,py]
                to="360 50 50"
                repeatCount="indefinite"
              />
            </line>
            <line fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" x1="50" y1="50" x2="45.9" y2="74">
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="2s"
                from="0 50 50" // [angle] [px,py]
                to="360 50 50"
                repeatCount="indefinite"
              />
            </line>
          </svg>

          {/* Loader 2 */}
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
            <circle fill="none" stroke="#fff" stroke-width="4" cx="50" cy="50" r="44" style={{ 'opacity': 0.5 }} />
            <circle fill="white" stroke="#6997DB" stroke-width="3" cx="8" cy="54" r="6">
              <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 48"
                to="360 50 52"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* Loader 3 */}
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
            <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="50" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="70" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
          </svg>

          {/* Loader 4 */}
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
            <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15;0 -15;0 15"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="50" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15;0 -15;0 15"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="70" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15;0 -15;0 15"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
          </svg>

          {/* Loader 5 */}
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
            <rect fill="none" stroke="#fff" stroke-width="4" x="25" y="25" width="50" height="50">
              <animateTransform
                attributeName="transform"
                type="rotate"
                id="strokeBox"
                dur="0.5s"
                from="0 50 50"
                to="180 50 50"
                begin="rectBox.end"
              />
            </rect>
            <rect x="27" y="27" fill="#fff" width="46" height="50">
              <animate
                attributeName="height"
                id="rectBox"
                dur="1.3s"
                from="50"
                to="0"
                fill="freeze"
                begin="0s;strokeBox.end"
              />
            </rect>
          </svg>

          {/* Loader 6 */}
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
            <rect fill="#fff" stroke="none" width="4" height="10" x="40" y="50">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="0.6s"
                values="0 0; 0 20; 0 0"
                repeatCount="indefinite"
                begin="0.1s"
              />
            </rect>
            <rect fill="#fff" stroke="none" width="4" height="10" x="50" y="50">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="0.6s"
                values="0 0; 0 20; 0 0"
                repeatCount="indefinite"
                begin="0.2s"
              />
            </rect>
            <rect fill="#fff" stroke="none" width="4" height="10" x="60" y="50">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="0.6s"
                values="0 0; 0 20; 0 0"
                repeatCount="indefinite"
                begin="0.3s"
              />
            </rect>
          </svg>

          {/* Loader 7 */}
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        {/* Loader 8 */}
        <div className="jellyBoxParent">
          <div className="jellyBox"></div>
          <div className="shadow"></div>
        </div>
        <div className="buttonBox">
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Loading;