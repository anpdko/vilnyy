import React from 'react'
import s from './Home.module.scss'
import homeBg1Img from '../../assets/images/home-bg1.png'
import homeBg2Img from '../../assets/images/home-bg2.png'
import homeBg3Img from '../../assets/images/home-bg3.png'
import logoImg from '../../assets/images/logo.png'
import Slider from "react-slick";

const Home = () => {
   const settings = {
      vertical: true,
      arrows: false,
      dots: false,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
   };

   return (
      <div className={s.home}>
         <div className={s.bg}>
            <Slider {...settings}>
               <div>
                  <img src={homeBg1Img} alt='homeBg1Img'/>
               </div>
               <div>
                  <img src={homeBg2Img} alt='homeBg2Img'/>
               </div>
               <div>
                  <img src={homeBg3Img} alt='homeBg3Img'/>
               </div>
            </Slider>
            {/* <img src={homeBg1Img} alt="back" /> */}
            <div className={s.box_filter}></div>
         </div>
         <div className={s.content}>
            <div className={s.box_logo}>
               <img className={s.logo} src={logoImg} alt="back" />
               <h1>спільнота</h1>
            </div>

         </div>
      </div>
   );
};
export default Home