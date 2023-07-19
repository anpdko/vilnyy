import React, { useState, useEffect } from 'react'
import s from './Traditions.module.scss'
import peopleIcon from '../../assets/images/icons/people.png'
import traditionsData from '../../data/traditions';
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import TraditionsPopUp from './TraditionsPopUp'
import { useTranslation } from 'react-i18next';
import { ITradition } from '../../data/traditions'
import { scrollTrigger, scrollTriggerItems } from '../../services/gsap'

interface ICardTransition {
   index: number;
   data: ITradition;
   className?: string;
}

const CardTransition = ({ index, data, className=""}: ICardTransition) => {
   const { t } = useTranslation();
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={`${s.item} ${className}`} >
         <div>
            {isOpen &&
               <TraditionsPopUp
                  tradition={data}
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
            >{t("Learn more")}</ButtonApp>
         </div>
         <div className={s.foto}>
            <img src={data.foto} alt="foto" />
         </div>
      </div >
   )
}

const Traditions = () => {
   const { t, i18n } = useTranslation();
   const langPerson = i18n.language === "uk" ? "uk" : "en";

   useEffect(() => {
      scrollTrigger(`.${s.traditions} .title2`, `.${s.traditions} .title2`, {y: 50})

      scrollTriggerItems(`.traditions_item:nth-child(odd)`, `.${s.items}`, {x: -100})
      scrollTriggerItems(`.traditions_item:nth-child(even)`, `.${s.items}`, {x: 100})
   }, [])


   return (
      <div className={s.traditions}>
         <h1 className='title2'>
            {t("How do we build")} <strong>{t("communities?")}</strong>
            <img src={peopleIcon} alt="icon" />
         </h1>
         <div className={s.items}>
            {traditionsData.map((item, index) =>
               <CardTransition key={item.id} index={index} data={item[langPerson]} className="traditions_item"/>
            )}
         </div>
      </div>
   );
};
export default Traditions