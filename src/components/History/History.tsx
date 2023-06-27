import React from 'react'
import s from './History.module.scss'
import historyImg from '../../assets/images/history.png'
import listImg from '../../assets/images/icons/list.png'

const History = () => {
   return (
      <div className={s.history}>
         <h1 className='title'>
            Наша історія
            <img src={listImg} alt="list" />
         </h1>
         <div className={s.box_info}>
            <div className={s.info}>
               <p>Ідея створювати колівінги проактивної молоді VILNYY походить від ініціативи «Вільний простір». «Вільний простір» був заснований після Революції Гідності й за своєю філософією сформувався на засадах сили та духу Майдану. Після революції її учасники зрозуміли, що треба триматися купи й почали жити разом у Львові.</p>
               <p>З потреби молоді жити в комфортних умовах та з гідними людьми почали формуватися перші колівінги мережі VILNYY в Києві. За майже 5 років своєї діяльності ми пережили COVID-19 та стійко працюємо у воєнних умовах. Продовжуємо слідувати нашій місії та змінювати життя молоді.</p>
            </div>
            <div className={s.box_foto}>
               <img src={historyImg} alt="foto" />
            </div>
         </div>


      </div>
   );
};
export default History