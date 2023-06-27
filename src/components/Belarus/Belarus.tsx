import React from 'react'
import s from './Belarus.module.scss'
import IconHug from '../../assets/images/icons/hug.png'
import BelarusImg from '../../assets/images/belor.png'

const Belarus = () => {
   return (
      <div className={s.belarus}>
         <h1 className='title2'>
            <strong>Допомога білоруським біженцям</strong>
            <img src={IconHug} alt="icon" />
         </h1>
         <p>У 2021 році ми співпрацювали з організацією «Громадський Діалог» й спільно творили колівінги для вимушених переселенців з Білорусі. Ці колівінги були непублічні задля безпеки мешканців. Ми приймали опозиціонерів, які до біженства мали різний статус та вік: від суддів та власників бізнесів, до студентів та пенсіонерів.</p>
         <p>За рік нашої взаємодії ми відкрили 3 приміщення та прихистили близько 100 біженців. З початку повномасштабного вторгнення цей проєкт завершився. Наразі на наших колівінгах проживає 17 внутрішньо переміщених осіб. Ми плануємо розвивати цей вектор і надалі.</p>
         <div className={s.box_img}>
            <img src={BelarusImg} alt="" />
         </div>
      </div>
   );
};
export default Belarus