import { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './Nvar.module.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {ShowLogin} from './../../features/login/loginSlice';
import Login from '../../Components/Login/Login';

function Nvar() {
    const dispatch = useDispatch()
    const handleClick = () => {
      dispatch(ShowLogin(true));
    };
    return (
        <div className={styles.container}>
            <img src="Logo.png" className={styles.logo}/>            
            <h1 className= {styles.title}>
                <Link className={styles.linea} to = "/">Home</Link>
            </h1>
            <h1 className= {styles.title}>
                <Link className={styles.linea} to = "/news">News</Link>
            </h1>
            <h1 className= {styles.title}>
                <Link className={styles.linea} to = "/support">Support</Link>
            </h1>
            <h1>
              <button className={styles.loginButton} onClick={handleClick}> Login</button>
            </h1>
        </div>
    );
}

export default Nvar;
