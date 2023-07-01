import React, {useEffect, useState} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
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
    console.log("wef")
    if(mainPath !== pathStorage){
      window.scrollTo(0, 0);
      setPathStorage(mainPath)
    }
  }, [pathname, pathStorage])

  return (
    <div className="App">
      <div className='container'>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>

              <Route path='/colivers' element={<People/>}/>
              <Route path='/colivers/:id' element={<People/>}/>

              <Route path='/community' element={<Community/>}/>
              <Route path='/community/:id' element={<Community/>}/>

              <Route path='/team' element={<Team/>}/> 
              
              <Route path='/contacts' element={<Contasts/>}/>
            </Routes>
          <LinksNetwork className='links_network'/>
      </div>
    </div>
  );
}

export default App;
