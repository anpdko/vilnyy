import React, { useState, useEffect } from 'react'
import s from './Navbar.module.scss'
import navigation from '../../data/navigation'
import LinksNetwork from '../../components/LinksNetwork/LinksNetwork';
import Translation from '../Translation/Translation'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll';


const Navbar = () => {
   const [toggle, setToggle] = useState(false);
   const [activePage, setActivePage] = useState('');
   const [isHome, setIsHome] = useState(true);
   const [isTop, setIsTop] = useState(true)
   const { t } = useTranslation()

   useEffect(() => {
      if (toggle) {
         document.body.style.overflow = 'hidden';
      }
      else {
         document.body.style.overflow = 'auto';
      };
   }, [toggle]);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY * 2 > window.innerHeight) {
            setIsHome(false);
         } else {
            setIsHome(true);
            setActivePage("");
         }
         if (window.scrollY < 50) {
            setIsTop(true)
         }
         else {
            setIsTop(false)
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [])


   const toggleActive = (): string => {
      return toggle ? "active" : ""
   }

   function handleSetActive(to: any) {
      setActivePage(to)
   }

   const clickLink = (link: string) => {
      setToggle(false)
      setTimeout(() => {
         setActivePage(link)
      }, 200)
   }

   return (
      <React.Fragment>
         <div
            className={[s.toggle, isTop ? s.top : "", s[toggleActive()]].join(' ')}
            onClick={() => setToggle(!toggle)}
         >
            <span></span>
            <span></span>
            <span></span>
         </div>
         <nav className={[s.navbar, isHome ? s.home : '', s[toggleActive()]].join(" ")}>
            <div></div>
            <ul className={s.menu}>
               {navigation.map(nav =>
                  <li key={nav.link} className={nav.link === activePage ? s.active : ''}>
                     <Link
                        onClick={() => clickLink(nav.link)}
                        to={nav.link}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={600}
                        onSetActive={handleSetActive}
                     >
                        {t(nav.title)}
                     </Link>
                  </li>
               )}
               <li><a href="https://vilnyy.co" target="_blank" rel="noreferrer">{t("Organization")}</a></li>
               <li><Translation /></li>
            </ul>
            <div></div>
            <LinksNetwork className={[s.links_network, s[toggleActive()]].join(' ')} />
         </nav>
      </React.Fragment>
   );
};
export default Navbar