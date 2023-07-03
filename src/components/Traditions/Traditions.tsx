import React from 'react'
import s from './Traditions.module.scss'
import peopleIcon from '../../assets/images/icons/people.png'
import traditionsData from '../../data/traditions';
import { useParams } from 'react-router-dom';
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import TraditionsPopUp from './TraditionsPopUp'
import { useTranslation } from 'react-i18next';
import { ITradition } from '../../data/traditions'

interface ICardTransition {
   index: number;
   id: string | number;
   data: ITradition;
}

const CardTransition = ({ index, id, data }: ICardTransition) => {
   const { t } = useTranslation();
   return (
      <div className = { s.item } >
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
            >{t("Learn more")}</ButtonApp>
         </div>
         <div className={s.foto}>
            <img src={data.foto} alt="foto" />
         </div>
      </div >
   )
}

const Traditions = () => {
   const { id } = useParams()
   const { t, i18n } = useTranslation();
   const langPerson = i18n.language === "uk" ? "uk" : "en";

   return (
      <div className={s.traditions}>
         <h1 className='title2'>
            {t("How do we build")} <strong>{t("communities?")}</strong>
            <img src={peopleIcon} alt="icon" />
         </h1>
         <div className={s.items}>
            {traditionsData.map((item, index) =>
               <CardTransition key = {item.id} id={item.id} index={index} data={item[langPerson]}/>
            )}
         </div>

         {traditionsData.map((tradition, index) =>
            Number(id) === tradition.id &&
            <TraditionsPopUp key={tradition.id} index={index} tradition={tradition[langPerson]} />
         )}
      </div>
   );
};
export default Traditions