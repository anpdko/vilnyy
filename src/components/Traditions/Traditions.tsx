import React from 'react'
import s from './Traditions.module.scss'
import peopleIcon from '../../assets/images/icons/people.png' 
import traditionsData from '../../data/traditions';
import { useParams } from 'react-router-dom';
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import TraditionsPopUp from './TraditionsPopUp'

const Traditions = () => {
   const { id } = useParams()

   return (
      <div className={s.traditions}>
         <h1 className='title2'>
            Як ми будуємо <strong>спільноти?</strong>
            <img src={peopleIcon} alt="icon" />
         </h1>
         <div className={s.items}>
            {traditionsData.map((item, index) =>
               <div  key={item.id} className={s.item}>
                  <div className={s.index}>
                     <h3>{index + 1}</h3>
                  </div>
                  <div className={s.box_info}>
                     <h2>{item.title}</h2>
                    <ButtonApp color="white" type='link' to={"/community/" + item.id}>Дізнатись більше</ButtonApp>
                  </div>
                  <div className={s.foto}>
                     <img src={item.foto} alt="foto" />
                  </div>
               </div>
            )}
         </div>

         {traditionsData.map((tradition, index) =>
            Number(id) === tradition.id && 
            <TraditionsPopUp key={tradition.id} index={index} tradition={tradition}/> 
         )}
      </div>
   );
};
export default Traditions