import React from 'react'
import s from './Online.module.scss'
import phoneIcon from '../../assets/images/icons/phone.png'
import phone1Img from '../../assets/images/online/phone1.png'
import phone2Img from '../../assets/images/online/phone2.png'
import com1Img from '../../assets/images/online/com1.png'
import com2Img from '../../assets/images/online/com2.png'
import Slider from "react-slick";

const Online = () => {
   const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
   };

   return (
      <div className={s.online}>
         <h1 className='title'>
            Онлайн-спільнота
            <img src={phoneIcon} alt="icons" />
         </h1>
         <div className={s.box_content}>
            <div className={s.text}>
               <p>Ми прагнемо ділитися нашими ідеями та цінностями не тільки з коліверами, а й з онлайн-спільнотою в Instagram. За весь час роботи ми зібрали понад 12 тис. активних підписників, з якими постійно спілкуємося про досвід та практики спільнотного життя. Також часто розповідаємо про наших талановитих коліверів, популяризуємо їхні проєкти та підприємництва. Регулярно проводимо та підсилюємо збори на потреби ЗСУ. Просуваємо ідеї гідності та проактивності. Підписуйся за посиланням.</p>
               <img src={com1Img} alt="com1" />
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