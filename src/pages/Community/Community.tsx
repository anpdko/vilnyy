import React from 'react'
import s from './Community.module.scss'
import Events from '../../components/Events/Events';
import Belarus from '../../components/Belarus/Belarus';
import Traditions from '../../components/Traditions/Traditions';
import WrapperPage from '../../components/WrapperPage/WrapperPage'

const Community = () => {
   return (
      <WrapperPage>
         <div className={s.community}>
            <Traditions/>
            <Events/>
            <Belarus/>
         </div>
      </WrapperPage>
   );
};
export default Community