import React, { useEffect} from 'react'
import s from './Values.module.scss'
import targetImg from '../../assets/images/icons/target.png'
import { useTranslation } from 'react-i18next'
import {scrollTrigger, scrollTriggerItems} from '../../services/gsap'

const items = [
   {
      title: "Respect",
      text: "Living in a community requires consideration for the feelings and comfort of others.  It is respect that is the inseparable element in the relationship between co-livers. This value is manifested in regular joint gatherings and discussions, where each community forms its own list of agreements and norms for a comfortable life."
   },
   {
      title: "Inspiration for action",
      text: "Thanks to the selection system, only motivated and pro-active people live in co-living.  By their example, the co-livers inspire each other and strengthen each other in moments of need."
   },
   {
      title: "Community building",
      text: "We do not just live together, but create a community of active and unique people.  One of the methods of community building is a shared dinner that takes its place every Monday evening.  Co-livers gather for a joint meal and conduct activities that they like: communicate, reflect, celebrate, play games, etc."
   }
]

const Values = () => {
   const { t } = useTranslation()

   useEffect(() => {
      scrollTrigger(`.${s.values} .title`, `.${s.values}`, { x: 0, y: -50 })
      scrollTriggerItems(`.${s.item}`, `.${s.items}`, { x: 300 })
   }, [])

   return (
      <div className={s.values}>
         <h1 className='title'>
            {t("Our values")}
            <img src={targetImg} alt='' />
         </h1>
         <div className={s.items}>
            {items.map((item, index) =>
               <div key={index} className={s.item}>
                  <div className={s.index}>
                     <h3>{index + 1}</h3>
                  </div>
                  <div className={s.box_info}>
                     <h2>{t(item.title)}</h2>
                     <p>{t(item.text)}</p>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};
export default Values