import React from 'react'
import s from './About.module.scss'
import History from '../../components/History/History';
import Mission from '../../components/Mission/Mission';
import Values from '../../components/Values/Values';
import Work from '../../components/Work/Work';

const About = () => {
   return (
      <div className={s.about}>
         <History/>
         <Mission/>
         <Values/>
         <Work/>
      </div>
   );
};
export default About