import React from 'react'
import s from './CardPerson.module.scss'
import { ITeam } from '../../data/team';
import decorImg from '../../assets/images/team/decor.png'
import frameImg from '../../assets/images/team/frame.png'
import IconInst from '../../components/UI/IconInst/IconInst'

function getRndInteger(min: number, max: number): number {
   return Math.floor(Math.random() * (max - min)) + min;
}

interface ICardPerson {
   data: ITeam, 
   className?: string
}

const CardPerson = ({ data, className }: ICardPerson) => {
   const sideDecor = Math.floor(Math.random() * 2)
   const angleCard = getRndInteger(-7, 7)

   return (
      <div className={`${s.box_card} ${className}`}>
         <div
            className={[s.card, sideDecor ? s.left : s.right].join(" ")}
            style={{ transform: "rotate(" + angleCard + "deg)" }}
         >
            <div className={s.box_frame}>
               <img className={s.frame} src={frameImg} alt="" />
               <div className={s.box_foto}>
                  <img className={s.foto} src={data.foto}
                     alt="" />
                  <h2 className={s.name}>{data.name}</h2>
               </div>
               <img className={s.decor} src={decorImg} alt='decor' />
               {data?.inst &&
                  <IconInst link={data.inst} className={s.inst} />
               }
               <div className={s.messages}>
                  {data.discription}
               </div>
            </div>
            <p className={s.job}>{data.job}</p>
         </div>

         <div className={s.mob_messages}>
            {data.discription}
         </div>
      </div>

   );
};
export default CardPerson