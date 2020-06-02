import React from 'react';
import AppRouter from './router/router';
import CircleLoading from './pages/CircleLoading/CircleLoading';
import Icons from './pages/Icons/Loading';
import Cards from './pages/Cards/Card';
import Clock from './pages/Clock/Clock';
import WaitPage from './pages/Clock/WaitPage'; // Clock
import Snow from './pages/SnowDrop/Snow';
import CoupleAn from './pages/CoupleAn/CoupleAn';
import CoupleAn1 from './pages/CoupleAn/CoupleAn1';
import Lottie from './pages/Lottie/lottie';
import HeartAnimate from './pages/HeartAnimate/HeartAnimate';
import HeartSprite from './pages/HeartAnimate/HeartSprite';
import BallGroup from './pages/BallGroup/BallGroup';
import Buttons from './pages/MilkBtn/Buttons';

function Main() {
  return (
    <div>
      <AppRouter />
      {/* <Clock width="200" height="200" clockRadius="100" /> */}
      {/* <WaitPage /> */}
      {/* <CoupleAn /> */}
      {/* <CoupleAn1 /> */}
      {/* <CircleLoading /> */}
      {/* <Icons /> */}
      {/* <Cards /> */}
      {/* <Snow /> */}
      {/* <Lottie /> */} {/* lottie 可行？ */}
      {/* <HeartAnimate /> */}
      {/* <HeartSprite /> */}
      {/* <Buttons /> */}
      {/* <SubWay /> */}
      {/* <StrokeExm /> */}
      {/* <ThreePlanet /> */}
    </div>
  )
}

export default Main;