import { useState } from "react";
import styles from './Login.module.css';
import styled from 'styled-components';
import Register from './../Register/Register'
import { Link } from 'react-router-dom';

function Login({closeLogin}) {
  const [openRegister, setOpenRegister] = useState(false);
  return (
          
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <img className={styles.img} src="LoginAuten.jpeg"/>
              <div className={styles.rightSide}>
                <div className={styles.titleCloseBtn}>
                  <button onClick={() => closeLogin()}> x </button>
                </div>
                <div className={styles.title}>
                  <h1>INICIAR<br/>SESION</h1>
                </div>
                <div className={styles.body}>  
                  <form method="POST">
                    <label for="correo">CORREO</label><br />
                    <input type="text" placeholder="Ingresa tu correo" id="correo" name="correo" required/><br />
                    <label for="contrasena">CONTRASEÑA</label><br />
                    <input type="password" placeholder="Ingresa tu contraseña" id="contrasena" name="contrasena" required/>
                  </form>
                </div>
                <div className={styles.button_container}>
                  <button className={styles.myButton}><img src="steam.png"/></button>
                  <button className={styles.myButton}><img src="google.png"/></button>
                  <button className={styles.myButton}><img src="apple.png"/></button>
                  <button className={styles.myButton}><img src="xbox.png"/></button>
                </div>
                <label className={styles.text2}>
                  <input type="checkbox"/> Permanecer <br /> conectado
                </label>
                <button className={styles.boton_con_flecha}/>
              </div>
            </div>
        </div>
  );
}

export default Login;
