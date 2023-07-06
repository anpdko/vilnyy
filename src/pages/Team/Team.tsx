import React from 'react'
import s from './Team.module.scss'
import wandIcon from "../../assets/images/icons/wand.png"
import teamData from "../../data/team"
import CardPerson from '../../components/CardPerson/CardPerson'
import { useTranslation } from 'react-i18next'

const Team = () => {
   const { t, i18n } = useTranslation();
   const langPerson = i18n.language === "uk" ? "uk" : "en";

   return (
      <div className={s.team} id="team">
         <h1 className='title2'>
            {t("What do you see in front of you?")}
            <img src={wandIcon} alt="icon" /><br />
            <strong>{t("Our team is a treasure!")}</strong>
         </h1>
         <div className={s.cards}>
            {teamData.map((person, index) =>
              <CardPerson key={index} data={person[langPerson]}/>
            )}
         </div>
      </div>
   );
};
export default Team