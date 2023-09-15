import { useState } from "react";
import styles from './Register.module.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Register({closeRegister}) {

    return (
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <img className={styles.img} src="Register.jpeg"/>
              <div className={styles.titleCloseBtn}>
                <button onClick={() => closeRegister(false)}> x </button>
              </div>
              
              <div className={styles.title}>
                <h1>Create new account</h1>
              </div>
              <div className={styles.body}>
                <form method="POST">
                    
                  <label className={styles.label_container}for="Nombre">Name</label>
                  <label className={styles.label_container}for="Apellido">Last name</label>
                  
                  <div className={styles.input_container}> 
                    <input type="text1" id="text1" name="Nombre" required/><br />
                    <input type="text1" id="text2" name="Apellido" required/><br />
                  </div>  
                  <label for="text1">Mail</label><br />
                  <input type="text1" id="text3" name="correo" required/>
                  <label for="text1">Password</label><br />
                  <input type="password2" id="contrasena" name="contrasena" required/><br/>
                  <label for="text1">Confirm Password</label><br />
                  <input type="password2" id="contrasena" name="contrasena" required/>
                </form>
              </div>
              <div className={styles.button_container}>
                <button className={styles.myButton}><img src="steam.png"/></button>
                <button className={styles.myButton}><img src="google.png"/></button>
                <button className={styles.myButton}><img src="appleB.png"/></button>
                <button className={styles.myButton}><img src="xbox.png"/></button>
              </div>
              <div className={styles.footer}>
                <button>Create account</button>
              </div>
            </div>
          </div>
    );
}

export default Register
