import {useState} from 'react';
import Nvar from './../../Components/Nvar/Nvar';
import styles from './News.module.css';
import Login from '../../Components/Login/Login';
import { useSelector } from 'react-redux';

function News() {
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    } 
  ]);
  const getDataFromChild = (data) => {
    console.log(`viendo Dta desde App: ${data}`);
  };
  const loginState = useSelector((state) => state.login)
  return (
    <div className={styles.container}>
        {post.map((p, i) => (
            <Nvar
              key={p.id}
              name={p.name}
              getData={getDataFromChild}
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
      {loginState.valueL === true && <Login/>}
    </div>
  );
}

export default News;
