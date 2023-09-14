import {useState} from 'react';
import Nvar from './../../Components/Nvar/Nvar';
import styles from './News.module.css';

function News() {
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }/*,{
      id: 2,
      name: 'name 2'
    },{
      id: 3,
      name: 'name 3'
    }*/]);
  const getDataFromChild = (data) => {
    console.log(`viendo Dta desde App: ${data}`);
  };
  return (
    <div className={styles.container}>
        {post.map((p, i) => (
            <Nvar
              key={p.id}
              name={p.name}
              getData={getDataFromChild}
            />
        ))}
      <img className={styles.imageNews}src="news2.jpg"/>
      <h1 className={styles.title}> NEWS </h1>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <h1 className={styles.titleCar}>Noticia A</h1>
          <p>Una descripcion de la Noticia A</p>
          <button className={styles.boton2}> Leer Mas</button>
        </div>
        <div className={styles.card2}>
          <h1 className={styles.titleCar}>Noticia B</h1>
          <p>Una descripcion de la Noticia B</p>
          <button className={styles.boton1}> Leer Mas.</button>
        </div>
      </div>
    </div>
  );
}

export default News;
