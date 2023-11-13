import { useState } from "react";
import {auth} from './../../config/firebase'
import {signOut} from 'firebase/auth'
import styles from './NvarGame.module.css';
import { Link } from 'react-router-dom';

function NvarGame() {
    const handleLogout = async () => {
        try {
          await signOut(auth);
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
        }
      };
    return (
        <div className={styles.container}>     
            <button className={styles.PlayButton} >
              <img className={styles.img} src="play.png"/>
              <Link className={styles.lineaPlay} to = "/Formations">PLAY</Link>
            </button>
            <h1 className= {styles.title}>
                <Link className={styles.linea} to = "/HomeGame">HOME</Link>
            </h1>
            <h1 className={styles.title}>
                <Link className={styles.linea} to = "/NewsGame">NEWS</Link>
            </h1>
            <h1 className={styles.title}>
                <Link className={styles.linea} to = "/Profile">PROFILE</Link>
            </h1>
            <h1 className= {styles.title}>
                <Link className={styles.linea} to = "/Collection">COLLECTION</Link>
            </h1>
            <button className={styles.PlayButton} onClick={handleLogout}>
              <Link className={styles.linea} to = "/">LOGOUT</Link>
            </button>
        </div>
    );
}

export default NvarGame;
