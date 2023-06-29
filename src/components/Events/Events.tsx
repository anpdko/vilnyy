import React from 'react'
import s from './Events.module.scss'
import eventsData from '../../data/events'
import admitIcon from '../../assets/images/icons/admit.png' 
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import { useParams } from 'react-router-dom';
import EventsPopUp from './EventsPopUp'

const Events = () => {
   const { id } = useParams()

   return (
      <div className={s.events}>
         <h1 className='title2'>
            <strong>Відкриті події</strong>
            <img src={admitIcon} alt="icon" />
         </h1>
         <div className={s.items}>
            {eventsData.map((item, index) =>
               <div  key={item.id} className={s.item}>
                  <div className={s.index}>
                     <h3>{index + 1}</h3>
                  </div>
                  <div className={s.box_info}>
                     <h2>{item.title}</h2>
                    <ButtonApp 
                        className={s.btn}
                        color="white" 
                        type='link' 
                        to={"/community/" + item.id}
                    >Дізнатись більше</ButtonApp>
                  </div>
                  <div className={s.foto}>
                     <img src={item.foto} alt="foto" />
                  </div>
               </div>
            )}
         </div>

         {eventsData.map((event, index) =>
            Number(id) === event.id && 
            <EventsPopUp key={event.id} index={index} data={event}/> 
         )}
      </div>
   );
};
export default Events