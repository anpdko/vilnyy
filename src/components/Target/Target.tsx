import React, {useEffect} from 'react'
import s from './Target.module.scss'
import targetImg from '../../assets/images/target/target.png'
import targetEngImg from '../../assets/images/target/target_eng.png'
import foto1Img from '../../assets/images/target/foto1.png'
import foto2Img from '../../assets/images/target/foto2.png'
import foto3Img from '../../assets/images/target/foto3.png'
import { useTranslation } from 'react-i18next'
import { scrollTrigger, scrollTriggerItems } from '../../services/gsap'

const Target = () => {
   const {t, i18n} = useTranslation()

   useEffect(() => {
      scrollTrigger(`.${s.left} p`, `.${s.target}`, {x: -100})
      scrollTrigger(`.${s.left} img`, `.${s.left} img`, {x: -100})
      scrollTriggerItems(`.${s.right} img`, `.${s.target}`, {x: 100})
   }, [])

   return (
      <div className={s.target}>
         <div className={s.left}>
            <p>
               <strong>{t("Our ambitious goal")} </strong>
               {t("is to fundamentally change the system of cohabitation and student interaction in university dorms.  One of the first steps is the opening of special living quarters for students of the Kyiv School of Economics, KSE.  They operate according to the rules and values ​​of all our co-livings, but only KSE students can live there.  This is the first and unique officially registered practice in Ukraine.  Co-liver Mariyka comments about her experience at this co-living in the following way:")}
            </p>
            {i18n.language === "uk" 
               ?<img src={targetImg} alt="target" /> 
               :<img src={targetEngImg} alt="target" />
            }
         </div>
         <div className={s.right}>
            <img className={s.foto1} src={foto1Img} alt="foto1" />
            <img className={s.foto2} src={foto2Img} alt="foto2" />
            <img className={s.foto3} src={foto3Img} alt="foto3" />
         </div>
      </div>
   );
};
export default Target