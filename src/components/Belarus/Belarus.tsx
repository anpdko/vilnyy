import React from 'react'
import s from './Belarus.module.scss'
import IconHug from '../../assets/images/icons/hug.png'
import BelarusImg from '../../assets/images/belor.png'
import { useTranslation } from 'react-i18next'

const Belarus = () => {
   const { t } = useTranslation()

   return (
      <div className={s.belarus}>
         <h1 className='title2'>
            <strong>{t("Help for Belarusian refugees")}</strong>
            <img src={IconHug} alt="icon" />
         </h1>
         <p>{t("In 2021, we cooperated with the 'Public Dialogue' and created co-livings for refugees from Belarus. These co-livings were closed to the public for the safety of the residents. We hosted oppositionists who had different experiences and ages: from judges and business owners to students and pensioners.")}</p>
         <p>{t("During the year of our cooperation, we opened 3 spaces and helped about 100 refugees. Since the beginning of the full-scale invasion, this project has ended. Currently, 17 internally displaced persons live in our co-livings. We plan to develop this direction in the future.")}</p>
         <div className={s.box_img}>
            <img src={BelarusImg} alt="" />
         </div>
      </div>
   );
};
export default Belarus