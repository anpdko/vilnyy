import React from 'react'
import s from './Community.module.scss'
import Events from '../../components/Events/Events';
import Belarus from '../../components/Belarus/Belarus';
import Traditions from '../../components/Traditions/Traditions';

const Community = () => {
   return (
      <div className={s.community} id="community">
         <Traditions/>
         <Events/>
         <Belarus/>
      </div>
   );
};
export default Community