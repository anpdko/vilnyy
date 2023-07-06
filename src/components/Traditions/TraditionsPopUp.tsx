import React, { useEffect } from 'react'
import s from './Traditions.module.scss'
import NoScrollContainer from '../../components/NoScrollContainer/NoScrollContainer'
import gsap from 'gsap'

import {ITradition} from '../../data/traditions'

interface ITraditionsPopUp {
   tradition: ITradition;
   index: number;
   close: any;
}

const TraditionsPopUp = ({tradition, index, close}:ITraditionsPopUp) => {
   useEffect(()=>{
      gsap.from(`.${s.popup}`, { delay: 0.2, duration: 0.2, opacity: 0, ease: 'power3.easeIn' })
      gsap.from(`.${s.box_popup}`, { delay: 0, duration: 0.5, opacity: 0, scale: 0, ease: 'power3.easeIn' })
   }, [])

   const handleClose = () => {
      gsap.to(`.${s.popup}`, { duration: 0.2, opacity: 0, ease: 'power3.easeOut' })
      gsap.to(`.${s.box_popup}`, { duration: 0.3, opacity: 0, scale: 0, ease: 'power3.easeOut',
      onComplete: () => {
         close()
      } })
   };


   return (
      <NoScrollContainer>
      <div className={s.popup}>
         <div className={s.bg_height}>
            <div className={s.box_popup}>
               <button className={s.close} onClick={handleClose}>
                  <i className="bi bi-x-lg"></i>
               </button>
               <div className={s.col}>
                  <div className={s.body}>
                     <h2>{index+1}. {tradition.titleFull}</h2>
                     <p>{tradition.body}</p>
                  </div>
                  <img className={s.foto_card} src={tradition.fotoCard} alt="foto-card" />
               </div>
            </div>
         </div>
      </div>
   </NoScrollContainer>
   );
};
export default TraditionsPopUp