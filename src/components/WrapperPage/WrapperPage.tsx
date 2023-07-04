import React, { useEffect } from "react";
import { gsap } from "gsap";

interface IWrapperPage {
  children: React.ReactNode,
}

const WrapperPage = ({children }: IWrapperPage) => {
  
   useEffect(() => {
      gsap.fromTo('.wrapper_page', {opacity: 0, ease: 'power3.easeIn' }, {delay: 0.2, duration: 0.5, opacity: 1, ease: 'power3.easeIn' })
   }, [])

  return (
    <div className="wrapper_page">
      {children}
    </div>
  );
};

export default WrapperPage;
