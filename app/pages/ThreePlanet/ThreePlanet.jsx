import React, { Component } from 'react';
import './style.scss';
const THREE = window.THREE = require('three');

const backgroundColor = 0xeeeeee;
const backgroundColorS = '#eeeeee';
const mainColor = 0x475166;
const mainColorS = '#475166';
const accentColor = 0xF7941E;

function arcify(x) {
  if (x === 0) return Math.pow(x + 2, 2);
  else return Math.pow(Math.abs(x), 2);
}

function randomBetween(small, large) {
  return (Math.random() * large | 0) + small;
}

class ThreePlanet extends Component {
  componentDidMount() {
    this.target = document.querySelector('#target');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.windowHalfX = this.width / 2 | 0;
    this.windowHalfY = this.height / 2 | 0;
    this.mouse = {
      x: this.windowHalfX,
      y: this.windowHalfY,
      lazyX: 0,
      lazyY: 0
    };

    this.scene = new THREE.Scene(); // 创建场景对象, 我们的空间内「有什么」和「放在哪」
    // (视景体竖直方向上（非水平！）的张角| 窗口大小的宽高比| 可以看到多近的物体| 可以看到多远的物体)
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.01, 10); // 透视投影相机
    this.camera.position.set(0, 0, 2);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true, // 是否执行抗锯齿
    }); // 创建渲染器对象

    this.renderer.setPixelRatio(window.devicePixelRatio); // 设置像素比
    this.renderer.setSize(this.width, this.height);

    this.planet = this.createPlanet();
    this.rings = this.createRings();
    this.planet.add(this.rings); // 使用场景对象的方法.add()把三维场景的子对象添加到场景中
    this.scene.add(this.planet); // planet添加到场景中

    this.moons = this.createMoons();
    this.scene.add(this.moons);
    this.target.appendChild(this.renderer.domElement);
    this.renderCustom();
    this.addListener();
  }

  renderCustom = () => {
    let distX = this.mouse.x - this.mouse.lazyX;
    if (distX > 3 || distX < 3) this.mouse.lazyX += distX / 20 | 0;

    let distY = this.mouse.y - this.mouse.lazyY;
    if (distY > 3 || distY < 3) this.mouse.lazyY += distY / 20 | 0;

    this.camera.position.x += (this.mouse.lazyX * 0.0005 - this.camera.position.x - 0.8);
    this.camera.position.y += (-(this.mouse.lazyY - this.windowHalfY) * 0.003 - this.camera.position.y + 0.5);
    this.camera.lookAt(this.scene.position); // 设置相机方向(指向的场景对象)

    this.planet.rotation.y += 0.005;
    this.moons.rotation.y += 0.001;

    requestAnimationFrame(this.renderCustom);
    this.renderer.render(this.scene, this.camera);
  }

  createPlanet = () => {
    let texture = new THREE.Texture(this.createTexture()); //  createTexture为参，创建一个纹理对象Texture
    texture.anisotropy = this.renderer.getMaxAnisotropy(); // 纹理的各向异性，设置得越大，远处的画面细节保留得越多
    texture.needsUpdate = true; // 下次使用纹理时触发更新
    let material = new THREE.MeshBasicMaterial({ // 材质效果
      map: texture
    });

    let medium = new THREE.MeshBasicMaterial({
      color: mainColor,
      side: THREE.BackSide // 定义将要渲染哪一面
    });

    let planet = new THREE.Group();
    let planetGeometry = new THREE.SphereGeometry(0.48, 50, 50); // 创建一个球体几何对象
    let faceVertexUvs = planetGeometry.faceVertexUvs[0]; // faceVertexUvs属性包含该geometry各个面的坐标映射
    for (let i = 0; i < faceVertexUvs.length; i++) {
      for (let j = 0; j < 3; j++) faceVertexUvs[i][j].y = planetGeometry.faces[i].vertexNormals[j].y * 0.5 + 0.5;
    }

    let innerPlanet = new THREE.Mesh(planetGeometry, material); // 网格模型对象Mesh、粘合
    planet.add(innerPlanet);
    let planetOutline = new THREE.Mesh(planetGeometry, medium);
    planetOutline.scale.multiplyScalar(1.05);
    planet.add(planetOutline);

    return planet;
  }

  createRings = () => {
    let dark = new THREE.MeshBasicMaterial({
      color: mainColor,
      side: THREE.DoubleSide // 渲染面
    });

    let medium = new THREE.MeshBasicMaterial({
      color: backgroundColor,
      side: THREE.DoubleSide
    })

    let rings = new THREE.Group();

    let ringOutlineInner = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.6, 70), dark);
    rings.add(ringOutlineInner);

    let ring = new THREE.Mesh(new THREE.RingGeometry(0.6, 0.75, 70), medium);
    rings.add(ring);

    let ringOutlineOutter = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.8, 70), dark)
    rings.add(ringOutlineOutter);

    rings.rotation.set(1.5, 0, 0);

    return rings;
  }

  createTexture = () => {
    let textureCanvas = document.createElement('canvas');
    if (textureCanvas.getContext) {
      let ctx = textureCanvas.getContext('2d');
      textureCanvas.width = 1024;
      textureCanvas.height = 1024;

      let lineThickness = 26;

      ctx.fillStyle = backgroundColorS;
      ctx.fillRect(0, 0, textureCanvas.width, textureCanvas.height);

      ctx.lineWidth = lineThickness;
      ctx.lineCap = 'round';
      ctx.strokeStyle = mainColorS;
      ctx.beginPath();

      let amoutOfRows = textureCanvas.height / lineThickness - 4;
      let middle = Math.floor(amoutOfRows / 2) + 2;
      for (let i = -middle - 1; i < middle; i += 3) {
        let level = arcify(i) / 150 + 1;
        let currentLength = randomBetween(20, 130);
        let topOffset = (i + middle) * lineThickness;

        while (true) {
          ctx.moveTo(currentLength, topOffset);
          let to = currentLength += randomBetween(50, 170) / level;
          if (to + 5 < textureCanvas.width) ctx.lineTo(to, topOffset);
          else break;

          currentLength += randomBetween(70, 150);
        }
      }
      ctx.stroke();

      return textureCanvas;
    }
  }

  // 群星
  createMoons = () => {
    let bright = new THREE.MeshBasicMaterial({
      color: accentColor
    });

    let dark = new THREE.MeshBasicMaterial({
      color: mainColor
    });

    let rockGeometry = new THREE.SphereGeometry(0.05, 20, 20);
    let moonGeometry = new THREE.SphereGeometry(0.08, 25, 25);

    let moons = new THREE.Group();

    let rock1 = new THREE.Mesh(rockGeometry.clone(), bright);
    rock1.position.set(-1.3, 0, -0.3);
    moons.add(rock1);

    let rock2 = new THREE.Mesh(rockGeometry.clone(), bright);
    rock2.position.set(-0.9, 0.4, -0.8);
    moons.add(rock2);

    let rock3 = new THREE.Mesh(rockGeometry.clone(), bright);
    rock3.position.set(0.9, -0.2, 0.3);
    moons.add(rock3);

    let rock4 = new THREE.Mesh(rockGeometry.clone(), bright);
    rock4.position.set(0.9, 0.3, -0.8);
    moons.add(rock4);

    let rock5 = new THREE.Mesh(rockGeometry.clone(), bright);
    rock5.position.set(-1.5, 0.2, -0.5);
    moons.add(rock5);

    let rock6 = new THREE.Mesh(rockGeometry.clone(), bright);
    rock6.position.set(-0.9, -0.4, 0.8);
    moons.add(rock6);

    let moon1 = new THREE.Mesh(moonGeometry.clone(), dark);
    moon1.position.set(-1.2, 0.2, -0.7);
    moons.add(moon1);

    let moon2 = new THREE.Mesh(moonGeometry.clone(), dark);
    moon2.position.set(0.5, 0.2, -1.6);
    moons.add(moon2);

    let moon3 = new THREE.Mesh(moonGeometry.clone(), dark);
    moon3.position.set(1.2, 0.2, 0.7);
    moons.add(moon3);

    let moon4 = new THREE.Mesh(moonGeometry.clone(), dark);
    moon4.position.set(-1.5, -0.8, 0.7);
    moons.add(moon4);

    return moons;
  }

  addListener = () => {
    this.target.addEventListener('mousemove', this.onMove);
    this.target.addEventListener('mouseleave', this.onLeave);
    this.target.addEventListener('touchstart', this.onMove);
    this.target.addEventListener('touchmove', this.onMove);
    window.addEventListener('resize', this.onResize);
  }

  onMove = (event) => {
    this.mouse.x = event.clientX || event.touches && event.touches[0].pageX;
    this.mouse.y = event.clientY || event.touches && event.touches[0].pageY;
  }

  onLeave = (event) => {
    this.mouse.x = this.windowHalfX;
    this.mouse.y = this.windowHalfY;
  }

  onResize = (event) => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.windowHalfX = this.width / 2 | 0;
    this.windowHalfY = this.height / 2 | 0;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix(); // 更新相机的投影矩阵
    this.renderer.setSize(this.width, this.height);
    this.mouse.x = this.windowHalfX;
    this.mouse.y = this.windowHalfY;
  }

  render() {
    return (
      <div id="target" />
    )
  }
}

export default ThreePlanet;