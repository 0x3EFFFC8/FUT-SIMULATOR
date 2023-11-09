import { useState,useEffect  } from "react";
import styles from './Login.module.css';
import styled from 'styled-components';
import Register from './../Register/Register'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {ShowLogin} from './../../features/login/loginSlice'

function Login() { 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(ShowLogin(false));
  };
  // Función para habilitar el scroll una vez que el componente se desmonte
  const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
  };

  // Deshabilitar el scroll al montar el componente
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Habilitar el scroll cuando el componente se desmonte
    return () => {
      enableBodyScroll();
    };
  }, []);
  const handleLogin = () => {
    // Lógica de inicio de sesión exitoso

    // Redirige a la página de destino
    navigate('/HomeGame');
    dispatch(ShowLogin(false));
  };
  return (     
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <img className={styles.img} src="LoginAuten.jpeg"/>
              <div className={styles.rightSide}>
                <div className={styles.titleCloseBtn}>
                  <button onClick={handleClick}> x </button>
                </div>
                <div className={styles.title}>
                  <h1>LOG IN<br/></h1>
                </div>
                <div className={styles.body}>  
                  <form method="POST" className={styles.passwordLogin}>
                    <label for="correo">MAIL</label><br />
                    <input type="text" placeholder="Enter your email" id="correo" name="correo" required/><br />
                    <label for="contrasena">PASSWORD</label><br />
                    <input type="password" placeholder="Enter your password" id="contrasena" name="contrasena" required/>
                  </form>
                </div>
                <div className={styles.button_container}>
                  <button className={styles.myButton}><img src="steam.png"/></button>
                  <button className={styles.myButton}><img src="google.png"/></button>
                  <button className={styles.myButton}><img src="apple.png"/></button>
                  <button className={styles.myButton}><img src="xbox.png"/></button>
                </div>
                <label className={styles.text2}>
                  <input type="checkbox"/>Stay connected
                </label>
                <button className={styles.boton_con_flecha} onClick={handleLogin}/>
              </div>
            </div>
           </div>
  );
}

export default Login;
