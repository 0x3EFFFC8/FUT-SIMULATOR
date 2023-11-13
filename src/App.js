import React, { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import { useSelector} from 'react-redux';
import './App.css';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Support from './pages/Support/Support';
import Page404 from './pages/Page404/Page404';
import HomeGame from './pages/HomeGame/HomeGame';
import NewsGame from './pages/NewsGame/NewsGame';
import Profile from './pages/Profile/Profile';
import Formations from './pages/Formations/Formations';
import Collections from './pages/collections/Cards';


function App(){
    const loginState = useSelector((state) => state.login)
    return (    
      <div className={`App ${ (loginState.valueL || loginState.valueR)&& 'overflow-hidden'}`}> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/news" element={<News/>}/>
          <Route exact path="/support" element={<Support/>}/>
          <Route exact path="/HomeGame" element={<HomeGame/>}/>
          <Route exact path="/Profile" element={<Profile/>}/>
          <Route exact path="/NewsGame" element={<NewsGame/>}/>
          <Route exact path="/Formations" element={<Formations/>}/>
          <Route exact path="/collection" element={<Collections/>}/>
          <Route exact path="*" element={<Page404/>}/>
        </Routes>
      </div>
    );
  }

export default App;
//export default connect(mapStateToProps)(App);
