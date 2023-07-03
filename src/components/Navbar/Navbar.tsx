import React, { useState, useEffect } from 'react'
import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import navigation from '../../data/navigation'
import LinksNetwork from '../../components/LinksNetwork/LinksNetwork';
import Translation from '../Translation/Translation'
import { useTranslation } from 'react-i18next'


const Navbar = () => {
   const [toggle, setToggle] = useState(false)
   const { pathname } = useLocation();
   const isHome = () => pathname === "/" ? s.home : ''
   const { t } = useTranslation()

   const isActive = ({ isActive }: { isActive: boolean }) => {
      return isActive ? s.active : ""
   }

   useEffect(() => {
      if(toggle) {
         document.body.style.overflow = 'hidden';
      }
      else{
        document.body.style.overflow = 'auto';
      };
    }, [toggle]);


   const toggleActive = (): string => {
      return toggle ? "active" : ""
   }

   return (
      <React.Fragment>
         <div 
            className={[s.toggle, isHome(), s[toggleActive()]].join(' ')} 
            onClick={() => setToggle(!toggle)}
         >
            <span></span>
            <span></span>
            <span></span>
         </div>
         <nav className={[s.navbar, isHome(), s[toggleActive()]].join(" ")}>
            <div></div>
            <ul className={s.menu}>
               {navigation.map(nav =>
                  <li key={nav.link}>
                     <NavLink 
                        to={nav.link} 
                        onClick={() => setToggle(false)} 
                        className={isActive}
                     >
                        {t(nav.title)}
                     </NavLink>
                  </li>
               )}
               <li><Translation/></li>
            </ul>
            <div></div>
            <LinksNetwork className={[s.links_network, s[toggleActive()]].join(' ')}/>
         </nav>
      </React.Fragment>
   );
};
export default Navbar