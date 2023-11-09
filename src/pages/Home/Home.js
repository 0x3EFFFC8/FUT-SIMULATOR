import {useState} from 'react';
import Nvar from './../../Components/Nvar/Nvar';
import styles from './Home.module.css';
import styled from 'styled-components';
import Login from './../../Components/Login/Login';
import Register from './../../Components/Register/Register';
import { useSelector, useDispatch } from 'react-redux';
import {ShowLogin,ShowRegister} from './../../features/login/loginSlice';

function Home() {
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }
    ]);
  const dispatch = useDispatch()
  const handleClickL = () => {
    dispatch(ShowLogin(true));
  }; 
  const handleClickR = () => {
    dispatch(ShowRegister(true));
  };
  const loginState = useSelector((state) => state.login)
  return (
    <div className={styles.container}>
      {post.map((p, i) => (
          <Nvar
            key={p.id}
            name={p.name}
          />
        ))}
  
      <h1 className={styles.title}>
            F U T <br />
            S I M U <br />
            L A T O R 
      </h1>
      
      <img className={styles.imageLogin}src="Home.jpeg"/>
      <button className={styles.buttonJ} button onClick={handleClickL}>PLAY NOW</button>
      {loginState.valueL === true && <Login />}
      <button className={styles.buttonR} button onClick={handleClickR}>REGISTER</button>
      {loginState.valueR === true && <Register />}
    </div>
  );
}

export default Home;
