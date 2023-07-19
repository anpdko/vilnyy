import React, { useState, useEffect } from 'react'
import s from './People.module.scss'
import peopleData from '../../data/people'
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import PeoplePopUp from './PeoplePopUp'
import IconInst from '../../components/UI/IconInst/IconInst';
import { useTranslation } from 'react-i18next';
import { IPerson } from '../../data/people'
import { scrollTrigger, scrollTriggerItems2 } from '../../services/gsap'

interface ICartPerson {
   person: IPerson,
   className?: string
}

const CartPerson = ({ person, className=""}: ICartPerson) => {
   const { t } = useTranslation();
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={`${s.card} ${className}`}>
         <div className={s.box_foto}>
            <img src={person.foto} alt="foto" className={s.foto} />
         </div>

         {!!person?.inst &&
            <IconInst className={s.inst} link={person.inst} />}
         <ButtonApp 
            className={s.btn} 
            onClick={() => setIsOpen(true)}>
            {t("Learn more")}
         </ButtonApp>

         {isOpen &&
            <PeoplePopUp person={person} close={() => setIsOpen(false)} />
         }
      </div>
   )
}

const People = () => {
   const { t, i18n } = useTranslation();
   const langPerson = i18n.language === "uk" ? "uk" : "en";

   useEffect(() => {
      scrollTrigger("#colivers .title2", "#colivers .title2", {y: 50})
      scrollTriggerItems2('.people_card', `.${s.cards}`, {x: 100})
   }, [])

   return (
      <div className={s.people} id="colivers">
         <h1 className='title2'>{t("Our greatest value is the people who choose to live in")} <strong>VILNYY</strong></h1>
         <div className={s.cards}>
            {peopleData.map(person =>
               <CartPerson key={person.id} person={person[langPerson]} className="people_card" />
            )}
         </div>
      </div>
   );
};
export default People