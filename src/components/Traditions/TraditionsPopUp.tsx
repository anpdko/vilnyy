import React from 'react'
import s from './Traditions.module.scss'
import { Link } from 'react-router-dom';
import NoScrollContainer from '../../components/NoScrollContainer/NoScrollContainer'

import {ITradition} from '../../data/traditions'

interface ITraditionsPopUp {
   tradition: ITradition;
   index: number;
}

const TraditionsPopUp = ({tradition, index}:ITraditionsPopUp) => {
   return (
      <NoScrollContainer>
      <div className={s.bg_popup}>
         <div className={s.box_popup}>
            <Link className={s.close} to="/community">
               <i className="bi bi-x-lg"></i>
            </Link>
            <div className={s.col}>
               <div className={s.body}>
                  <h2>{index+1}. {tradition.titleFull}</h2>
                  <p>{tradition.body}</p>
               </div>
               <img src={tradition.fotoCard} alt="foto-card" />
            </div>
         </div>
      </div>
   </NoScrollContainer>
   );
};
export default TraditionsPopUp