import {useState} from 'react';
import NvarGame from './../../Components/NvarGame/NvarGame';
import styles from './NewsGame.module.css';
import { useSelector } from 'react-redux';

function NewsGame() {
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }]);
  return (
    <div className={styles.container}>
      {post.map((p, i) => (
          <NvarGame
            key={p.id}
            name={p.name}
          />
      ))}
      <img className={styles.imageNews}src="news.jpeg"/>
      <h1 className={styles.title}> NEWS </h1>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <h1 className={styles.titleCar}>News A</h1>
            <p>A description of News A</p>
            <button className={styles.boton2}>Read more</button>
        </div>
        <div className={styles.card2}>
          <h1 className={styles.titleCar}>News B</h1>
          <p>A description of News B</p>
          <button className={styles.boton1}>Read more</button>
        </div>    
      </div>
      <div className={styles.divisor}>
        <h1 className={styles.title2}>
            F U T   S I M U L A T O R 
        </h1>
      </div>
      <div className={styles.cards2}>
        <div className={styles.card4}>
          <h1 className={styles.titleCar2}>News C</h1>
          <p className={styles.description}>A description of News C</p>
          <button className={styles.boton3}>Read more</button>
        </div>
        <div className={styles.card3}>
          <h1 className={styles.titleCar2}>News D</h1>
          <p className={styles.description}>A description of News D</p>
          <button className={styles.boton4}>Read more</button>
        </div>
        <div className={styles.card4}>
          <h1 className={styles.titleCar2}>News E</h1>
          <p className={styles.description}>A description of News E</p>
          <button className={styles.boton3}>Read more</button>
        </div>
        <div className={styles.card3}>
          <h1 className={styles.titleCar2}>News F</h1>
          <p className={styles.description}> A description of News F</p>
          <button className={styles.boton4}>Read more</button>
        </div>
        <img  style={{ top: '5%', left: '10%' ,transform: "rotate(-5deg)"}} className={styles.imgnew}src="n5.jpeg" />
        <img style={{ top: '29%', left: '53%', transform: "rotate(5deg)" }} className={styles.imgnew}src="n1.jpg" />
        <img style={{ top: '57%', left: '10%' ,transform: "rotate(-5deg)"}} className={styles.imgnew}src="n6.jpg" />
        <img style={{ top: '79%', left: '53%',transform: "rotate(5deg)" }} className={styles.imgnew}src="n4.jpg" />
        <div className= {styles.divisor2}>
          <p>
            ©2023 FutSimulator. All rights reserved 
          </p>
        </div>
      </div>    
    </div>
  );
}

export default NewsGame;
