import React from 'react'
import s from './Mission.module.scss'
import missionImg from '../../assets/images/mission.png'
import lightImg from '../../assets/images/icons/light.png'
import { useTranslation } from 'react-i18next'

const Mission = () => {
   const { t } = useTranslation()

   return (
      <div className={s.mission}>
         <div className={s.box_info}>
            <div className={s.info}>
               <h1 className='title'>
                  {t("Our mission")}
                  <img src={lightImg} alt="light" />
               </h1>
               <p>{t("To help the pro-active youth of Ukraine realize their own potential through the interpretation, popularization and exploration of the idea of ​community living.")}</p>
            </div>
            <div className={s.box_foto}>
               <img src={missionImg} alt="foto" />
            </div>
         </div>
         
      </div>
   );
};
export default Mission