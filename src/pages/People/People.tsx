import React from 'react'
import s from './People.module.scss'
import peopleData from '../../data/people'
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import { useParams } from 'react-router-dom';
import PeoplePopUp from './PeoplePopUp'
import IconInst from '../../components/UI/IconInst/IconInst';

const People = () => {
   const { id } = useParams()

   return (
      <div className={s.people}>
         <h1 className='title2'>Our greatest value is the people who choose to live in <strong>VILNYY</strong></h1>
         <div className={s.cards}>
            {peopleData.map(person =>
               <div  key={person.id} className={s.card}>
                  <img src={person.foto} alt="foto" className={s.foto} />
                  {!!person?.inst &&
                     <IconInst className={s.inst} link={person.inst}/>}
                  <ButtonApp className={s.btn} type="link" to={"/colivers/" + person.id}>
                     Дізнатись більше
                  </ButtonApp>
               </div>
            )}
         </div>

         {peopleData.map(person =>
            Number(id) === person.id && 
            <PeoplePopUp key={person.id} person={person}/> 
         )}
      </div>
   );
};
export default People