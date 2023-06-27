import React from 'react'
import s from './CardPerson.module.scss'
import { ITeam } from '../../data/team';
import decorImg from '../../assets/images/team/decor.png'
import frameImg from '../../assets/images/team/frame.png'
import IconInst from '../../components/UI/IconInst/IconInst'

function getRndInteger(min:number, max:number):number {
   return Math.floor(Math.random() * (max - min) ) + min;
 }

const CardPerson = ({data}:{data:ITeam}) => {
   const sideDecor = Math.floor(Math.random() * 2)
   const angleCard = getRndInteger(-8, 8)

   return (
      <div 
      className={[s.card, sideDecor?s.left:s.right].join(" ")}
      style={{transform: "rotate(" + angleCard + "deg)"}}
      >
         <div className={s.box_frame}>
            <img className={s.frame} src={frameImg} alt="" />
            <div className={s.box_foto}>
               <img className={s.foto} src={data.foto}
                  alt="" />
               <h2 className={s.name}>{data.name}</h2>
            </div>
            <img className={s.decor} src={decorImg} alt='decor' />
            { data?.inst && 
               <IconInst link={data.inst} className={s.inst}/>
            }
            <div className={s.messages}>
               {data.discription}
            </div>
         </div>
         <p className={s.job}>{data.job}</p>
      </div>
   );
};
export default CardPerson