import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'
import './App.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from './components/Navbar/Navbar'
import LinksNetwork from './components/LinksNetwork/LinksNetwork'

import Home from './pages/Home/Home';
import Contasts from './pages/Сontacts/Сontacts'
import People from './pages/People/People'
import Team from './pages/Team/Team';

import About from './pages/About/About'
import Community from './pages/Community/Community';

function App() {
  const [pathStorage, setPathStorage] = useState("")
  const { pathname } = useLocation();


  useEffect(() => {
    const mainPath = pathname.split("/")[1]
    if(mainPath !== pathStorage){
      window.scrollTo(0, 0);
      setPathStorage(mainPath)
    }
  }, [pathname, pathStorage])

  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Home/>
        <About/>
        <People/>
        <Community/>
        <Team/>
        <Contasts/>
        <LinksNetwork className='links_network'/>
      </div>
    </div>
  );
}

export default App;
