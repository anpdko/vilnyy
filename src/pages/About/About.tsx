import React from 'react'
import s from './About.module.scss'
import History from '../../components/History/History';
import Mission from '../../components/Mission/Mission';
import Values from '../../components/Values/Values';
import Work from '../../components/Work/Work';
import Target from '../../components/Target/Target';
import WrapperPage from '../../components/WrapperPage/WrapperPage'

const About = () => {
   return (
      <WrapperPage>
         <div className={s.about}>
            <History/>
            <Mission/>
            <Values/>
            <Work/>
            <Target/>
         </div>
      </WrapperPage>
   );
};
export default About