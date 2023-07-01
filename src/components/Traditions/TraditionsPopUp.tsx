import React, { useEffect } from 'react'
import s from './Traditions.module.scss'
import { useNavigate } from 'react-router-dom';
import NoScrollContainer from '../../components/NoScrollContainer/NoScrollContainer'
import gsap from 'gsap'

import {ITradition} from '../../data/traditions'

interface ITraditionsPopUp {
   tradition: ITradition;
   index: number;
}

const TraditionsPopUp = ({tradition, index}:ITraditionsPopUp) => {
   const navigate = useNavigate();

   useEffect(()=>{
      gsap.from(`.${s.bg_popup}`, { delay:0.2, duration: 0.2, opacity: 0, ease: 'power3.easeIn' })
      gsap.from(`.${s.box_popup}`, { delay:0, duration: 0.7, opacity: 0, scale: 0, ease: 'power3.easeIn' })
   }, [])

   const handleClose = () => {
      gsap.to(`.${s.bg_popup}`, { duration: 0.4, opacity: 0, ease: 'power3.easeOut'})
      gsap.to(`.${s.box_popup}`, { duration: 0.4, opacity: 0, scale: 0, ease: 'power3.easeOut',
      onComplete: () => {
         navigate('/community');
      } })
   };


   return (
      <NoScrollContainer>
      <div className={s.bg_popup}>
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
   </NoScrollContainer>
   );
};
export default TraditionsPopUp