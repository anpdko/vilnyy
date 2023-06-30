import React from 'react'
import s from './Work.module.scss'

const Work = () => {
   return (
      <div className={s.work}>
         <div className={s.box_work}>
            <div className={s.block}>
               <div className={s.content}>
                  створюємо міцні спільноти та міжособистісні звʼязки між проактивними людьми
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
                  вибудовуємо простір довіри та підсилення кожної людини
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
                  розвиваємо та просуваємо ідею спільнот в Україні
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
                  єднаємо людей зі спільними цінностями та баченням життя
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
                  творимо горизонтальні звʼязки між людьми з різних сфер та інституцій
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
                  бережемо ресурси планети завдяки спільному споживанню
               </div>
            </div>
            <div className={s.block}>
               <div className={s.content}>
                  інтегруємо молодь в проактивне суспільство та самостійне життя
               </div>
            </div>
            <div className={s.center}>
               Що ми робимо?
            </div>
         </div>
      </div>
   );
};
export default Work