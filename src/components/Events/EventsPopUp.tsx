import React, {useEffect} from 'react'
import s from './Events.module.scss'
import { useNavigate } from 'react-router-dom';
import NoScrollContainer from '../../components/NoScrollContainer/NoScrollContainer'
import gsap from 'gsap'

import { IEvents } from '../../data/events'

interface IIEventsPopUp {
   data: IEvents;
   index: number;
}

const EventsPopUp = ({data, index}:IIEventsPopUp) => {
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
                  <h2>{index+1}. {data.titleFull}</h2>
                  <p>{data.body}</p>
               </div>
               <img src={data.fotoCard1} className={s.img_card_1} alt="foto-card" />
               <img src={data.fotoCard2} className={s.img_card_2} alt="foto-card" />
            </div>
         </div>
      </div>
   </NoScrollContainer>
   );
};
export default EventsPopUp