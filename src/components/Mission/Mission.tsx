import React, {useEffect, useRef} from 'react'
import s from './Mission.module.scss'
import missionImg from '../../assets/images/mission.png'
import lightImg from '../../assets/images/icons/light.png'
import { useTranslation } from 'react-i18next'
import {scrollTrigger} from '../../services/gsap'

const Mission = () => {
   const { t } = useTranslation()
   const refInfo = useRef(null) 

   useEffect(() => {
      scrollTrigger(`.${s.mission} .title`, `.${s.mission}`, { x: 0, y: -50 })
      scrollTrigger(refInfo.current, `.${s.box_info}`, { x: -100, y: 0 })
      scrollTrigger(`.${s.box_foto} img`, `.${s.box_foto}`, { x: 100, y: -100, scale: 0.2 })
   }, [])

   return (
      <div className={s.mission}>
         <div className={s.box_info}>
            <div className={s.info}>
               <h1 className='title'>
                  {t("Our mission")}
                  <img src={lightImg} alt="light" />
               </h1>
               <p ref={refInfo}>{t("To help the pro-active youth of Ukraine realize their own potential through the interpretation, popularization and exploration of the idea of ​community living.")}</p>
            </div>
            <div className={s.box_foto}>
               <img src={missionImg} alt="foto" />
            </div>
         </div>
         
      </div>
   );
};
export default Mission