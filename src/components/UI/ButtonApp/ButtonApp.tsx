import React from 'react'
import s from './ButtonApp.module.scss'
import { Link } from 'react-router-dom';

interface ClickableButtonProps {
   children: React.ReactNode;
   className?: string;
   type?: "link" | "";
   to?: string;
   color?: 'red' | "white";
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonApp = ({ children, className, type="", to="/", color="red", onClick, ...props }: ClickableButtonProps) => {

   if(type === "link"){
      return (
         <Link to={to} 
            className={[s.btn, s[type], s[color], className].join(" ")} {...props}>
            {children}
            <i className="bi bi-arrow-right-short"></i>
         </Link>
      )
   }

   return (
      <button {...props}
         onClick={onClick}
         className={[s.btn, s[type], s[color], className].join(" ")}>
         {children}
         <i className="bi bi-arrow-right-short"></i>
      </button>
   );
};
export default ButtonApp