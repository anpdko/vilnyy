import React, {useEffect} from 'react'
import s from './Online.module.scss'
import phoneIcon from '../../assets/images/icons/phone.png'
import phone1Img from '../../assets/images/online/phone1.png'
import phone2Img from '../../assets/images/online/phone2.png'
import com1Img from '../../assets/images/online/com_1.png'
import com2Img from '../../assets/images/online/com_2.png'
import Slider from "react-slick";
import {useTranslation} from 'react-i18next'
import { scrollTrigger } from '../../services/gsap'

const Online = () => {
   const {t} = useTranslation()
   const settings = {
      // dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
   };

   useEffect(() => {
      scrollTrigger(`.${s.online} .title`, `.${s.box_content}`, {y: 50})

      scrollTrigger(`.${s.text} p`, `.${s.box_content}`, {x: -60})

      scrollTrigger(`.${s.phone}`, `.${s.box_content}`, {x: 60})
   }, [])

   return (
      <div className={s.online}>
         <h1 className='title'>
            <span>{t("Online community")}</span>
            <img src={phoneIcon} alt="icons" />
         </h1>
         <div className={s.box_content}>
            <div className={s.text}>
               <p>{t("We strive to share our ideas and values ​​not only with co-livers, but also with the online community on Instagram. Since the start of VILNYY, we have collected more than 12 thousand active subscribers, with whom we constantly communicate about the experience and practices of community life.  We also often talk about our talented co-livers and popularize their projects and businesses.  We regularly hold special meetings where we collect donations for the needs of the Armed Forces of Ukraine. We promote the ideas of dignity and pro-activity. Subscribe via the link.")}</p>
               <img className={s.comment_add} src={com2Img} alt="com2" />
               <img className={s.comment_text} src={com1Img} alt="com1" />
            </div>
            <div className={s.phone}>
               <Slider {...settings}>
                  <div>
                     <img src={phone1Img} alt="phone1" />
                  </div>
                  <div>
                     <img src={phone2Img} alt="phone2" />
                  </div>
               </Slider>
            </div>
            <div className={s.comment}>
               <img src={com2Img} alt="com2" />
            </div>

         </div>
      </div>
   );
};
export default Online