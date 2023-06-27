import React from 'react'
import s from './Team.module.scss'
import wandIcon from "../../assets/images/icons/wand.png"
import teamData from "../../data/team"
import CardPerson from '../../components/CardPerson/CardPerson'

const Team = () => {
   return (
      <div className={s.team}>
         <h1 className='title2'>
            Що ви бачите перед собою?
            <img src={wandIcon} alt="icon" /><br />
            <strong>Наша команда — це скарб!</strong>
         </h1>
         <div className={s.cards}>
            {teamData.map((person, index) =>
              <CardPerson key={index} data={person}/>
            )}
         </div>
      </div>
   );
};
export default Team