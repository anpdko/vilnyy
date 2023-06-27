import React, { useEffect } from 'react';

interface INoScrollContainer {
   children: React.ReactNode;
}

const NoScrollContainer = ({ children }:INoScrollContainer) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return <div>{children}</div>;
};

export default NoScrollContainer;
