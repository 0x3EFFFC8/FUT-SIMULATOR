import {useState} from 'react';
import styles from './Formations.module.css';

function Formations() {
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }]);
  return (
    <div className={styles.container}>
      <img className={styles.img} src="estadioFormaciones.jpg"/>
      <h1 className={styles.title}>CHOOSE FORMATION</h1>
      <button className={styles.container1}><img className={styles.imgF1} src="formacion1.png"/></button>
      <button className={styles.container2}><img className={styles.imgF2} src="formacion2.png"/></button>
      <button className={styles.container3}><img className={styles.imgF3} src="formacion3.png"/> </button>
      <button className={styles.container4}><img className={styles.imgF4} src="formacion4.png"/></button>
      <button className={styles.container5}><img className={styles.imgF5} src="formacion5.png"/></button>
      <button className={styles.container6}><img className={styles.imgF6} src="formacion6.png"/></button>
      
    </div>
  );
}

export default Formations;
