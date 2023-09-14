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
              <div className={styles.titleCloseBtn}>
                <button onClick={() => closeLogin()}> x </button>
              </div>
              <div className={styles.title}>
                <h1>INICIAR SECCION</h1>
              </div>
            <div className={styles.body}>  
              <form method="POST">
                  <label for="correo">CORREO</label><br />
                  <input type="email" id="correo" name="correo" required/><br />
                  <label for="contrasena">CONTRASEÑA</label><br />
                  <input type="password" id="contrasena" name="contrasena" required/>
              </form>
            </div>
            <div className={styles.footer}>
              <button>Continue</button>
            </div>
          </div>
        </div>
  );
}

export default Login;
