import React from 'react'
import s from './Events.module.scss'
import eventsData from '../../data/events'
import admitIcon from '../../assets/images/icons/admit.png'
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import { useParams } from 'react-router-dom';
import EventsPopUp from './EventsPopUp'
import { useTranslation } from 'react-i18next';

import { IEvents } from '../../data/events'

interface ICardEvents {
   id: string | number;
   index: number
   data: IEvents;
}

const CardEvents = ({ data, id, index }: ICardEvents) => {
   return (
      <div className={s.item}>
         <div className={s.index}>
            <h3>{index + 1}</h3>
         </div>
         <div className={s.box_info}>
            <h2>{data.title}</h2>
            <ButtonApp
               className={s.btn}
               color="white"
               type='link'
               to={"/community/" + id}
            >Дізнатись більше</ButtonApp>
         </div>
         <div className={s.foto}>
            <img src={data.foto} alt="foto" />
         </div>
      </div>
   )
}

const Events = () => {
   const { id } = useParams()
   const { t, i18n } = useTranslation();
   const langPerson = i18n.language === "uk" ? "uk" : "en";

   return (
      <div className={s.events}>
         <h1 className='title2'>
            <strong>{t("Open events")}</strong>
            <img src={admitIcon} alt="icon" />
         </h1>
         <div className={s.items}>
            {eventsData.map((item, index) =>
               <CardEvents key={item.id} data={item[langPerson]} id={item.id} index={index} />
            )}
         </div>

         {eventsData.map((event, index) =>
            Number(id) === event.id &&
            <EventsPopUp key={event.id} index={index} data={event[langPerson]} />
         )}
      </div>
   );
};
export default Events