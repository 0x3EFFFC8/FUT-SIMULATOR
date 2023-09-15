import {useState} from 'react';
import Nvar from './../../Components/Nvar/Nvar';
import styles from './Support.module.css';

function Support() {
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }]);
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
      <img className={styles.img}src="SupportBack.png"/>
      <div className={styles.containerS}>
        <h1 className={styles.title}>CONTACT US</h1>
      </div>
      <h1 className={styles.text}>
        futsimulator@papucho.com<br />
        Av 6C No 13-69, C.P 76001
      </h1>

      <div className={styles.button_container}>
        <button className={styles.myButton}><img src="facebook.png"/></button>
        <button className={styles.myButton}><img src="ig.webp"/></button>
        <button className={styles.myButton}><img src="blu.jpg"/></button>
        <button className={styles.myButton}><img src="yt.png"/></button>
      </div>
      <div className={styles.container_text}>
        <h1 className={styles.text2}>Corporation</h1>
        <h1 className={styles.text2}>Privacy Policy</h1>
      </div>
      <div className={styles.container_text2}>
        <h1 className={styles.text22}>Legal</h1>
        <h1 className={styles.text22}>Terms of Service</h1>
      </div>
    </div>
  );
}

export default Support;
