import React from 'react'
import s from './Mission.module.scss'
import missionImg from '../../assets/images/mission.png'
import lightImg from '../../assets/images/icons/light.png'

const Mission = () => {
   return (
      <div className={s.mission}>
         <div className={s.box_info}>
            <div className={s.info}>
               <h1 className='title'>
                  Наша місія
                  <img src={lightImg} alt="light" />
               </h1>
               <p>Допомагати проактивній молоді України реалізовувати власний потенціал через впровадження, популяризацію та дослідження ідеї спільнотного життя.</p>
            </div>
            <div className={s.box_foto}>
               <img src={missionImg} alt="foto" />
            </div>
         </div>
         
      </div>
   );
};
export default Mission