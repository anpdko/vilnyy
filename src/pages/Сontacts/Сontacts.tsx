import React from 'react'
import s from './Сontacts.module.scss'
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import Online from '../../components/Online/Online';
import Target from '../../components/Target/Target';

const Сontacts = () => {
   return (
      <div className={s.contasts}>
         <Online/>
         <Target/>

         <div className={s.info}>
            <p> <strong>VILNYY</strong> – неприбуткова організація, тому для функціонування та покращення наших проєктів потребуємо фінансового підслення. </p>
            <p>Задонатити можна тут. Дякуємо! ❤️</p>
            <ButtonApp type='link'>Донат</ButtonApp>
            <p className={s.max_text}>З нашим фінансовим звітом за 2022 рік можеш ознайомитися тут</p>
            <ButtonApp type='link'>Фінансовий звіт</ButtonApp>
            <h2>2022</h2>
         </div>


         <footer>
            <div className={s.info_footer}>
               <h3>Контакти</h3>
               <p>Георгій, СЕО</p>
               <p>+380667481572</p>
               <p>Georgiy.Dekhtyarenko@vilnyy.co</p>
            </div>
            <ButtonApp className={s.btn} type='link' color="white">Заїхати на VILNYY</ButtonApp>
         </footer>
      </div>
   );
};
export default Сontacts