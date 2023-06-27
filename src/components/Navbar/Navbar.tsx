import React, { useState } from 'react'
import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import navigation from '../../data/navigation'


const Navbar = () => {
   const [lang, srtLang] = useState('uk')
   const {pathname} = useLocation();
   const isHome = () => pathname==="/"?s.home:''

   const isActive = ({isActive}:{isActive:boolean}) => {
      return isActive ? s.active : ""
   }

   const classLang = (langProp:string):string => {
      return lang === langProp?"active":""
   }

   return (
      <nav className={[s.navbar, isHome()].join(" ")}>
         <ul className={s.menu}>
            {navigation.map(nav => 
               <li key={nav.link}><NavLink to={nav.link} className={isActive}>{nav.title}</NavLink></li>
            )}
            <li className={s.lengs}>
               <span className={s[classLang("uk")]} onClick={()=>srtLang("uk")}>укр</span>/
               <span className={s[classLang("en")]} onClick={()=>srtLang("en")}>eng</span>
               </li>
         </ul>
      </nav>
   );
};
export default Navbar