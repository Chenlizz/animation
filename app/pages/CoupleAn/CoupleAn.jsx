import React, { Component } from 'react';
import Couple from '../../components/CoupleAn/CoupleAn.jsx';
import VS from '../../components/VS/VS.jsx';
import leftImg from './img/tuile.png';
import rightImg from './img/meitui.png';
import './style.scss';

class CoupleAn extends Component {

  render() {
    return (
      <div className="index">
        <div className="title">你办退税了吗</div>
        <div className="dec decTxt">大家可以下载个人所得税APP，注册成功后，点击综合所得年度汇总，然后按提示填写，最后就可以查询到你是否可能退税，还是补税了，也可以开启你的2019个税记忆哦！~为国纳税，我为人人，人人为我</div>
        <div className="dec decNum">
          <span className="iconfont icon-renyuanbianzhi"></span>
          17935人已参与
        </div>
        <Couple vsGroup={
          <div className="couple">
            <div className="leftItem">
              <img src={leftImg} alt="退了" />
            </div>
            <VS />
            <div className="rightItem">
              <img src={rightImg} alt="没退" />
            </div>
          </div>
        } />

        <div className="discussionArea">
          <div className="positive">
            <div className="title">正方观点</div>
            <div className="block">
              <div className="id">
                <span className="photo"></span>
                <span>test01</span>
              </div>
              <div className="msg">
              你办退税了吗
              </div>
            </div>
            <div className="block">
              <div className="id">
                <span className="photo"></span>
                <span>test01</span>
              </div>
              <div className="msg">
              大家可以下载个人所得税APP，注册成功后，点击综合所
              </div>
            </div>
          </div>
          <div className="negative">
            <div className="title">反方观点</div>
            <div className="block">
              <div className="id">
                <span className="photo"></span>
                <span>test01</span>
              </div>
              <div className="msg">
              大家可以下载个人所得税APP，注册成功后，点击综合所
              </div>
            </div>
            <div className="block">
              <div className="id">
                <span className="photo"></span>
                <span>test01</span>
              </div>
              <div className="msg">
              你办退税了吗
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoupleAn;