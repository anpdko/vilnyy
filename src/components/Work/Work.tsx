import React from 'react'
import s from './Work.module.scss'
import { useTranslation } from 'react-i18next';

const Work = () => {
   const { t } = useTranslation();
   return (
      <div className={s.work}>
         <div className={s.box_work}>
            <div className={s.block}>
               <div className={s.content}>
                  {t("we create strong communities and interpersonal connections between pro-active people")}
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
                  {t("building a space of trust and growth for each person")}
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
                  {t("we develop and promote the idea of ​​communities in Ukraine")}
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
               {t("we unite people with common values ​​and vision of life")}
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
               {t("integrate young people into pro-active society and independent life")}
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
               {t("save the planet's resources thanks to shared consumption")}
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
               {t("we create horizontal connections between people from different fields and institutions")}
               </div>
            </div>
            <div className={s.center}>
               {t("What are we doing?")}
            </div>
         </div>
      </div>
   );
};
export default Work