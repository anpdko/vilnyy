import React, { useState } from 'react'
import s from './People.module.scss'
import peopleData from '../../data/people'
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import PeoplePopUp from './PeoplePopUp'
import IconInst from '../../components/UI/IconInst/IconInst';
import { useTranslation } from 'react-i18next';
import { IPerson } from '../../data/people'

interface ICartPerson {
   person: IPerson,
   id: string | number
}

const CartPerson = ({ person, id }: ICartPerson) => {
   const { t } = useTranslation();
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={s.card}>
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

   return (
      <div className={s.people} id="colivers">
         <h1 className='title2'>{t("Our greatest value is the people who choose to live in")} <strong>VILNYY</strong></h1>
         <div className={s.cards}>
            {peopleData.map(person =>
               <CartPerson key={person.id} id={person.id} person={person[langPerson]} />
            )}
         </div>
      </div>
   );
};
export default People