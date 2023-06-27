import React from 'react'
import s from './Target.module.scss'
import targetImg from '../../assets/images/target/target.png'
import foto1Img from '../../assets/images/target/foto1.png'
import foto2Img from '../../assets/images/target/foto2.png'
import foto3Img from '../../assets/images/target/foto3.png'

const Target = () => {
   return (
      <div className={s.target}>
         <div className={s.left}>
            <p>
               <strong>Наша амбітна ціль</strong> — це докорінно змінити систему спів проживання та взаємодії студентів в університетських гуртожитках. Один з перших кроків для її досягнення — це відкриття спеціальних колівінгів для студентів Київської школи економіки KSE. Вони функціонують за правилами та цінностями всіх наших колівінгів, але проживати там можуть тільки студенти KSE. Це перша та унікальна офіційно зареєстрована практика в Україні. Коліверка Марійка так відгукується про досвід на цьому колівінгу:
            </p>
            <img src={targetImg} alt="target" />
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