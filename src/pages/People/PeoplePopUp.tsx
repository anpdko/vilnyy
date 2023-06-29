import React from 'react'
import s from './People.module.scss'
import { Link } from 'react-router-dom';
import NoScrollContainer from '../../components/NoScrollContainer/NoScrollContainer'

import {IPerson} from '../../data/people'

const PeoplePopUp = ({person}:{ person: IPerson }) => {
   return (
      <NoScrollContainer>
      <div className={s.bg_popup}>
         <div className={s.box_popup}>
            <Link className={s.close} to="/colivers">
               <i className="bi bi-x-lg"></i>
            </Link>
            <h2 dangerouslySetInnerHTML={{ __html: person.title }}></h2>
            <div className={s.col}>
               <div className={s.body}>
                  <p dangerouslySetInnerHTML={{ __html: person.body }}></p>
               </div>
               <img className={s.foto_card} src={person.fotoCard} alt="foto-card" />
            </div>
         </div>
      </div>
   </NoScrollContainer>
   );
};
export default PeoplePopUp