import React, { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import { connect } from 'react-redux';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Support from './pages/Support/Support';
import Login from './Components/Login/Login';
import { openLogin, closeLogin } from './store/actions/actions';

function App({showLogin,openLogin,closeLogin}){
    
    const onOpenLogin = () => {
      openLogin();
    };
    
    const onCloseLogin = () => {
      closeLogin();
    };

    return (    
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/news" element={<News/>}/>
          <Route exact path="/support" element={<Support/>}/>
        </Routes>
        <button className="loginButton" onClick={onOpenLogin}> Login</button>
        {showLogin === true && <Login closeLogin={onCloseLogin}/>}
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    showLogin: state.ui.openLogin,
  };
}

const mapDispatchToProps = {
  openLogin,
  closeLogin,
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
