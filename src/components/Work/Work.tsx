import React, { useEffect, useRef } from 'react'
import s from './Work.module.scss'
import { useTranslation } from 'react-i18next';
import {scrollTrigger, scrollTriggerItems2} from '../../services/gsap'

const arr = [
   "we create strong communities and interpersonal connections between pro-active people",

   "building a space of trust and growth for each person",

   "we create horizontal connections between people from different fields and institutions",

   "we develop and promote the idea of ​​communities in Ukraine",

   "save the planet's resources thanks to shared consumption",

   "we unite people with common values ​​and vision of life",

   "integrate young people into pro-active society and independent life",
]

const Work = () => {
   const { t } = useTranslation();
   const refBox = useRef(null)

   useEffect(() => {
      scrollTriggerItems2('.work_item', refBox.current, { x: -100});

      scrollTrigger(`.${s.center }`, `.${s.center}`, {scale: 0.5})
   }, [])

   return (
      <div className={s.work} ref={refBox}>
         <div className={s.box_work}>
            {arr.map((item, index) =>
               <div key={index} className={`${s.block} work_item`}>
                  <div className={s.content}>
                     {t(item)}
                  </div>
               </div>
            )}
            <div className={s.center}>
               {t("What are we doing?")}
            </div>
         </div>
      </div>
   );
};
export default Work