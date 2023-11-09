import { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './NvarGame.module.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function NvarGame() {
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
            <button className={styles.PlayButton}>
              <Link className={styles.linea} to = "/">LOGOUT</Link>
            </button>
        </div>
    );
}

export default NvarGame;
