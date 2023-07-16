import React, {useEffect} from 'react'
import s from './Home.module.scss'
import homeBg1Img from '../../assets/images/home-bg1.png'
import homeBg2Img from '../../assets/images/home-bg2.png'
import homeBg3Img from '../../assets/images/home-bg3.png'
import logoImg from '../../assets/images/logo.png'
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const Home = () => {
   const { t } = useTranslation();
   const settings = {
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

   useEffect(() => {
      gsap.from(`.${s.bg}`, { delay: 0, duration: 1.2, opacity: 0.4, ease: 'power3.inOut' })
      gsap.from(`.${s.logo}`, {delay: 0.1, duration: 1, y: -100, opacity: 0.8, ease: 'power3.inOut' })
   }, [])

   return (
      <div className={s.home} id="home">
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
            <div className={s.box_filter}></div>
         </div>
         <div className={s.content}>
            <div className={s.box_logo}>
               <img className={s.logo} src={logoImg} alt="back" />
               <h1>{t('community')}</h1>
            </div>

         </div>
      </div>
   );
};
export default Home