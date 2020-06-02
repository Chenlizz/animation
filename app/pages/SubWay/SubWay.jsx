import React, { Component } from 'react';
import StrokeExm from './StrokeExm';
import './style.scss';

class SubWay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    const container = document.querySelector('#map');
    const svgBack = document.querySelector('#back');
    const svgFront = svgBack.cloneNode(true); // 拷贝节点
    svgFront.setAttribute('id', 'front');
    container.appendChild(svgFront);

    let paths = document.querySelectorAll('#front path, #front polyline');
    paths = Array.prototype.slice.call(paths);
    let style = ``;
    const CAR_SIZE = 10; // 移动块长度
    paths.forEach((path, i) => {
      path.setAttribute('id', 'path-' + i);
      const length = path.getTotalLength(); // 获取路径总长度
      const speed = length / 100;

      // 创建虚线，偏移（偏移量由x->0实现移动效果）
      style += `
    #path-${i} {
      stroke-dasharray: ${CAR_SIZE}, ${length / 2};
      stroke-dashoffset: ${length};
      animation: dash-${i} ${speed}s linear alternate infinite;  
    }

    @keyframes dash-${i} {
      from {
        stroke-dashoffset: ${length};
      }
      to {
        stroke-dashoffset: 0;
      }
    }`
    });

    const sheet = document.createElement('style');
    sheet.innerHTML = style;
    document.body.appendChild(sheet);
  }

  onClick = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div className="mapParent">
        <div className="title">Hang Zhou SubWay</div>
        <div id="map">
          <svg id="back" className="three-D" height="100%" width="100%" viewBox="0 0 2000 2600">
            <g stroke="none" stroke-width="1" fill="none">
              <g className="red">
                <path d="M1930,786L1930 786L1930 723L1928 719L1926 716L1923 713L1920 710L1915 708L1910 706L1903 705L1729 705L1674 706L1470 706L1414 705L916 705L907 706L898 707L891 711L885 716L882 721L881 727L881 735L881 754L880 783L880 916L881 922L883 928L886 932L890 935L894 937L900 938L909 939L1014 939L1020 940L1026 943L1031 946L1071 976L1072 977L1111 1008L1153 1041L1195 1073L1230 1100L1245 1112L1252 1117L1255 1122L1257 1126L1258 1131L1258 1140L1258 1252" />
                <path d="M1617,469L1617 469L1617 651L1618 673L1617 678L1616 684L1614 688L1610 693L1607 696L1601 699L1592 702L1581 706L1470 706L1414 705L916 705L907 706L898 707L891 711L885 716L882 721L881 727L881 735L881 754L880 783L880 916L881 922L883 928L886 932L890 935L894 937L900 938L909 939L1014 939L1020 940L1026 943L1031 946L1071 976L1072 977L1111 1008L1153 1041L1195 1073L1230 1100L1245 1112L1252 1117L1255 1122L1257 1126L1258 1131L1258 1140L1258 1252" />
              </g>
              <g className="orange">
                <path d="M476,476L476 476L552 476L558 477L562 480L565 483L565 675L567 680L570 683L576 685L582 686L607 686L757 686L765 687L772 688L778 690L783 693L786 698L789 703L791 708L791 814L792 820L794 825L797 829L807 835L815 836L822 837L880 837L1020 837L1026 838L1030 839L1033 840L1037 843L1044 849L1047 852L1051 853L1054 855L1058 855L1062 856L1065 856L1215 856L1223 857L1229 859L1235 862L1254 877L1289 904L1317 926L1350 951L1351 952L1399 988L1436 1016L1446 1024L1450 1029L1454 1033L1455 1038L1456 1044L1456 1357" />
              </g>
              <g className="green">
                <path d="M1351,709L1351 709L1284 709L1278 710L1272 710L1267 712L1263 714L1260 717L1258 720L1256 724L1255 728L1255 733L1254 747L1254 788L1254 890L1253 895L1249 901L1245 905L1228 917L1228 918L1203 937L1190 947L1152 975L1152 976L1111 1008L1070 1039L1036 1065L1004 1089L1004 1090L974 1113L968 1118L963 1123L960 1127L959 1133L959 1196L958 1224L958 1253" />
              </g>
              <g className="blue">
                <path d="M211,678L211 678L228 678L230 680L255 703L258 705L262 707L266 707L286 707L288 706L290 705L291 703L291 684L290 677L290 651L289 646L289 638L290 636L292 635L294 635L627 635L628 634L629 634L630 633L630 633L631 632L631 582L632 581L633 580L634 580L635 579L637 579L915 579L963 580L982 582L992 584L999 587L1003 593L1005 598L1005 616L1005 649L1006 671L1007 705L1007 730L1006 779L1006 795L1007 837L1006 883L1007 927L1007 933L1007 945L1002 950L998 953L990 958L978 966L968 973L958 981L956 984L954 985L952 988L950 991L951 993L952 995L955 998L963 1006L988 1027L1036 1065L1091 1108L1099 1113L1105 1119L1108 1124L1109 1130L1109 1163L1110 1170L1110 1173L1112 1177L1115 1178L1119 1178L1127 1179L1165 1179L1204 1179L1258 1178L1329 1177L1374 1176L1391 1175L1456 1173L1544 1173L1545 1174L1549 1173L1552 1174L1554 1174L1555 1176L1556 1178L1556 1180L1556 1189L1555 1212L1555 1230L1556 1232L1558 1232L1562 1233L1685 1233" />
              </g>
              <g className="yellow">
                <path d="M266,707L266 707L109 707L75 706L-15 706L-43 707L-60 707L-62 708L-64 709L-65 710L-67 712L-67 713L-68 714L-68 716L-68 725L-69 759L-70 804L-70 844" />
              </g>
            </g>
          </svg>
        </div>
        <div className="btn" onClick={this.onClick}>
          Click
        </div>
        {this.state.active ? <StrokeExm /> : ''}
      </div>
    )
  }
}

export default SubWay;