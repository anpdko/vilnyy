import React from 'react'
import s from './History.module.scss'
import historyImg from '../../assets/images/history.png'
import listImg from '../../assets/images/icons/list.png'
import { useTranslation } from 'react-i18next'

const History = () => {
   const { t } = useTranslation()
   return (
      <div className={s.history}>
         <h1 className='title'>
            {t("Our history")}
            <img src={listImg} alt="list" />
         </h1>
         <div className={s.box_info}>
            <div className={s.info}>
               <p>{t("The idea to create VILNYY proactive youth co-living comes from the «Vilnyy prostir» initiative. «Vilnyy prostir» was founded after the Revolution of Dignity and, according to its philosophy, was formed on the basis of the strength and spirit of the Maidan.  After the revolution, its participants had realized that they had to stick together and started living together in Lviv.")}</p>
               <p>{t("The first co-living of the VILNYY network began to take shape in Kyiv when young Ukrainians noticed a need to live in comfortable conditions with other like-minded individuals.  For almost 5 years of our activity, we have survived COVID-19 and now are working steadily in wartime conditions.  We continue to follow our mission and to change the lives of young people.")}</p>
            </div>
            <div className={s.box_foto}>
               <img src={historyImg} alt="foto" />
            </div>
         </div>


      </div>
   );
};
export default History