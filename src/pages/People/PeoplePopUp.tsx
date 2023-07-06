import React, { useEffect } from 'react'
import s from './People.module.scss'
import NoScrollContainer from '../../components/NoScrollContainer/NoScrollContainer'
import { IPerson } from '../../data/people'
import gsap from 'gsap'
import IconInst from '../../components/UI/IconInst/IconInst';

const PeoplePopUp = ({ person, close }: { person: IPerson, close:any }) => {

   useEffect(() => {
      gsap.from(`.${s.bg_popup}`, { delay: 0.2, duration: 0.2, opacity: 0, ease: 'power3.easeIn' })
      gsap.from(`.${s.box_popup}`, { delay: 0, duration: 0.5, opacity: 0, scale: 0, ease: 'power3.easeIn' })
   }, [])

   const handleClose = () => {
      gsap.to(`.${s.bg_popup}`, { duration: 0.2, opacity: 0, ease: 'power3.easeOut' })
      gsap.to(`.${s.box_popup}`, {
         duration: 0.3, opacity: 0, scale: 0, ease: 'power3.easeOut',
         onComplete: () => {
            close();
         }
      })
   };

   return (
      <NoScrollContainer>
         <div className={s.bg_popup}>
            <div className={s.box_popup}>
               <button className={s.close} onClick={handleClose}>
                  <i className="bi bi-x-lg"></i>
               </button>
               <h2 className={s.title}>
                  <span dangerouslySetInnerHTML={{ __html: person.title }}></span>
                  <span className={s.text_inst}>
                     {!!person.inst && <IconInst link={person.inst} className={s.inst} />}
                  </span>
               </h2>
               <div className={s.col}>
                  <div className={s.body}>
                     <p dangerouslySetInnerHTML={{ __html: person.body }}></p>
                  </div>
                  <img className={s.foto_card} src={person.fotoCard} alt="foto-card" />
               </div>
            </div>
         </div>
      </NoScrollContainer>
   );
};
export default PeoplePopUp