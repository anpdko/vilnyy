import React from 'react'
import s from './Сontacts.module.scss'
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import Online from '../../components/Online/Online';
import { useTranslation } from 'react-i18next';

const Сontacts = () => {
   const {t} = useTranslation()
   return (
      <div className={s.contasts} id="contacts">
         <Online/>

         <div className={s.info}>
            <p> <strong>VILNYY</strong> {t("is a non-profit organization, so we need financial support for the stable functioning and constant improvement of our projects.")} </p>
            <p>{t("You can donate here. Thank you! ❤️")}</p>
            <ButtonApp type='link'>{t("Donate")}</ButtonApp>
            <p className={s.max_text}>{t("You can read our financial report for 2022 here")}</p>
            <ButtonApp type='link'>{t("Financial report")}</ButtonApp>
            <h2>2022</h2>
         </div>


         <footer>
            <div className={s.info_footer}>
               <h3>{t("Contacts")}</h3>
               <p>{t("George, CEO")}</p>
               <p>+380667481572</p>
               <p>Georgiy.Dekhtyarenko@vilnyy.com</p>
            </div>
            <ButtonApp className={s.btn} type='link' color="white">{t("Go to VILNYY")}</ButtonApp>
         </footer>
      </div>
   );
};
export default Сontacts