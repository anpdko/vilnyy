import React, { useState } from 'react'
import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import navigation from '../../data/navigation'
import LinksNetwork from '../../components/LinksNetwork/LinksNetwork';


const Navbar = () => {
   const [toggle, setToggle] = useState(false)
   const [lang, srtLang] = useState('uk')
   const { pathname } = useLocation();
   const isHome = () => pathname === "/" ? s.home : ''

   const isActive = ({ isActive }: { isActive: boolean }) => {
      return isActive ? s.active : ""
   }

   const classLang = (langProp: string): string => {
      return lang === langProp ? "active" : ""
   }

   const toggleActive = (): string => {
      return toggle ? "active" : ""
   }

   return (
      <React.Fragment>
         <div 
            className={[s.toggle, s[toggleActive()]].join(' ')} 
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
                        {nav.title}
                     </NavLink>
                  </li>
               )}
               <li className={s.lengs}>
                  <span className={s[classLang("uk")]} onClick={() => srtLang("uk")}>укр</span>/
                  <span className={s[classLang("en")]} onClick={() => srtLang("en")}>eng</span>
               </li>
            </ul>
            <LinksNetwork className={s.links_network}/>
         </nav>
      </React.Fragment>
   );
};
export default Navbar