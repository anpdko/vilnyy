import React, {useState, useEffect} from 'react'
import s from './LinksNetwork.module.scss'


const LinksNetwork = ({className}:{className?: string}) => {
   const [isHome, setIsHome] = useState(true);

   useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY * 2 > window.innerHeight) {
          setIsHome(false);
        } else {
          setIsHome(true);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
   }, [])

   return (
      <div className={[s.links_network, className, isHome?s.home:''].join(" ")}>
         <ul className={s.menu}>
            <li>
               <a href="https://www.facebook.com/vilnyy" target="_blank" rel="noreferrer">
                  <svg width="36" height="35" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.0016 3.5C10.0492 3.5 3.60156 9.7685 3.60156 17.5C3.60156 25.2315 10.0492 31.5 18.0016 31.5C25.954 31.5 32.4016 25.2315 32.4016 17.5C32.4016 9.7685 25.954 3.5 18.0016 3.5ZM23.0188 12.8333H20.944C19.6528 12.8333 19.2016 13.496 19.2016 14.8377V16.3333H22.9864L22.4728 19.8333H19.2016V29.1083C18.8068 29.1457 18.4072 29.1667 18.0016 29.1667C17.1796 29.1667 16.3768 29.085 15.6016 28.9322V19.8333H12.0016V16.3333H15.6016V14.4538C15.6016 10.8955 17.3848 9.33333 20.4268 9.33333C21.8836 9.33333 22.654 9.43833 23.0188 9.48617V12.8333Z" />
                  </svg>
               </a>
            </li>
            <li>
               <a href="https://www.instagram.com/vilnyy/" target="_blank" rel="noreferrer">
                  <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.4987 2.33333C9.13603 2.33333 2.33203 9.13733 2.33203 17.5C2.33203 25.8627 9.13603 32.6667 17.4987 32.6667C25.8614 32.6667 32.6654 25.8627 32.6654 17.5C32.6654 9.13733 25.8614 2.33333 17.4987 2.33333ZM13.609 7H21.3861C25.0319 7 27.9987 9.96568 27.9987 13.6103V21.3874C27.9987 25.0332 25.033 28 21.3883 28H13.6113C9.9655 28 6.9987 25.0343 6.9987 21.3896V13.6126C6.9987 9.96679 9.96438 7 13.609 7ZM13.609 9.33333C11.2512 9.33333 9.33203 11.2536 9.33203 13.6126V21.3896C9.33203 23.7475 11.2523 25.6667 13.6113 25.6667H21.3883C23.7462 25.6667 25.6654 23.7464 25.6654 21.3874V13.6103C25.6654 11.2525 23.7451 9.33333 21.3861 9.33333H13.609ZM22.9447 11.277C23.374 11.277 23.7217 11.6247 23.7217 12.054C23.7217 12.4834 23.374 12.8333 22.9447 12.8333C22.5153 12.8333 22.1654 12.4834 22.1654 12.054C22.1654 11.6247 22.5153 11.277 22.9447 11.277ZM17.4987 11.6667C20.7152 11.6667 23.332 14.2835 23.332 17.5C23.332 20.7165 20.7152 23.3333 17.4987 23.3333C14.2822 23.3333 11.6654 20.7165 11.6654 17.5C11.6654 14.2835 14.2822 11.6667 17.4987 11.6667ZM17.4987 14C16.5704 14 15.6802 14.3687 15.0238 15.0251C14.3674 15.6815 13.9987 16.5717 13.9987 17.5C13.9987 18.4283 14.3674 19.3185 15.0238 19.9749C15.6802 20.6312 16.5704 21 17.4987 21C18.427 21 19.3172 20.6312 19.9736 19.9749C20.63 19.3185 20.9987 18.4283 20.9987 17.5C20.9987 16.5717 20.63 15.6815 19.9736 15.0251C19.3172 14.3687 18.427 14 17.4987 14Z" />
                  </svg>
               </a>
            </li>
         </ul>
      </div>
   );
};
export default LinksNetwork