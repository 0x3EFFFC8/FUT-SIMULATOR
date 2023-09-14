import {useState} from 'react';
import Nvar from './../../Components/Nvar/Nvar';
import styles from './Home.module.css';
import styled from 'styled-components';
import Login from './../../Components/Login/Login';
import Register from './../../Components/Register/Register'

function Home() {
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }
    ]);
  const getDataFromChild = (data) => {
    console.log(`viendo Dta desde App: ${data}`);
  };
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <div className={styles.container}>
      {post.map((p, i) => (
          <Nvar
            key={p.id}
            name={p.name}
            getData={getDataFromChild}
          />
        ))}
  
      <h1 className={styles.title}>
            F U T <br />
            S I M U <br />
            L A T O R 
      </h1>
      
      <img className={styles.imageLogin}src="Home.jpg"/>
      <button className={styles.buttonJ} button onClick={()=>{ setOpenLogin(true);}}>JUEGA AHORA</button>
      {openLogin && <Login closeLogin={setOpenLogin}/>}
      <button className={styles.buttonR}>REGISTRARSE</button>
      <button className={styles.buttonR} button onClick={() => {setOpenRegister(true)}}>REGISTRARSE</button>
      {openRegister && <Register closeRegister={setOpenRegister}/>}
    </div>
  );
}

export default Home;
