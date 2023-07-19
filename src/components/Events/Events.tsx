import React, { useState, useEffect } from 'react'
import s from './Events.module.scss'
import eventsData from '../../data/events'
import admitIcon from '../../assets/images/icons/admit.png'
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import EventsPopUp from './EventsPopUp'
import { useTranslation } from 'react-i18next';
import { scrollTrigger, scrollTriggerItems } from '../../services/gsap'

import { IEvents } from '../../data/events'

interface ICardEvents {
   index: number
   data: IEvents;
   className: string;
}

const CardEvents = ({ data, index, className }: ICardEvents) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={`${s.item} ${className}`}>
         <div>
            {isOpen &&
               <EventsPopUp 
                  data={data} 
                  index={index}
                  close={() => setIsOpen(false)} 
               />
            }
         </div>
         <div className={s.index}>
            <h3>{index + 1}</h3>
         </div>
         <div className={s.box_info}>
            <h2>{data.title}</h2>
            <ButtonApp
               className={s.btn}
               color="white"
               onClick={() => setIsOpen(true)}
            >Дізнатись більше</ButtonApp>
         </div>
         <div className={s.foto}>
            <img src={data.foto} alt="foto" />
         </div>
      </div>
   )
}

const Events = () => {
   const { t, i18n } = useTranslation();
   const langPerson = i18n.language === "uk" ? "uk" : "en";

   useEffect(() => {
      scrollTrigger(`.${s.events} .title2`, `.${s.events} .title2`, {y: 50})
      scrollTrigger(`.${s.events} p`, `.${s.events} p`)

      scrollTriggerItems(`.events_item:nth-child(odd)`, `.${s.items}`, {x: -100})
      scrollTriggerItems(`.events_item:nth-child(even)`, `.${s.items}`, {x: 100})
   }, [])

   return (
      <div className={s.events}>
         <h1 className='title2'>
            <strong>{t("Open events")}</strong>
            <img src={admitIcon} alt="icon" />
         </h1>
         <p className={s.text}>{t("To widen the community and attract new people, we organize various events for everyone.  Here are three of our favorites:")}</p>
         <div className={s.items}>
            {eventsData.map((item, index) =>
               <CardEvents key={item.id} className="events_item" data={item[langPerson]} index={index} />
            )}
         </div>
      </div>
   );
};
export default Events