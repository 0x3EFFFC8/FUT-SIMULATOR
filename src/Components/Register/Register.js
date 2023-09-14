import { useState } from "react";
import styles from './Register.module.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Register({closeRegister}) {

  return (
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <div className={styles.titleCloseBtn}>
                <button onClick={() => closeRegister(false)}> x </button>
              </div>
              <div className={styles.title}>
                <h1>CREAR CUENTA</h1>
              </div>
            <div className={styles.body}>
              <form method="POST">
                  <label for="correo">NOMBRE Y APELLIDOS</label><br />
                  <input type="email" id="correo" name="correo" required/><br />
                  <label for="contrasena">CORREO</label><br />
                  <input type="password" id="contrasena" name="contrasena" required/> <br />
                  <label for="correo">CONFIRMAR CONTRASEÑA</label><br />
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

export default Register
