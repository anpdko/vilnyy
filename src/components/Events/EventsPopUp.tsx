import React from 'react'
import s from './Events.module.scss'
import { Link } from 'react-router-dom';
import NoScrollContainer from '../../components/NoScrollContainer/NoScrollContainer'

import { IEvents } from '../../data/events'

interface IIEventsPopUp {
   data: IEvents;
   index: number;
}

const EventsPopUp = ({data, index}:IIEventsPopUp) => {
   return (
      <NoScrollContainer>
      <div className={s.bg_popup}>
         <div className={s.box_popup}>
            <Link className={s.close} to="/community">
               <i className="bi bi-x-lg"></i>
            </Link>
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