import { useState,useEffect  } from "react";
import { auth, db } from "./../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from './Login.module.css';
import { doc, getDoc} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ShowLogin} from './../../features/login/loginSlice'
import {setUserId} from '../../features/user/userSlice';

function Login() { 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(ShowLogin(false));
  };
  // Función para habilitar el scroll una vez que el componente se desmonte
  const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
  };

  // Deshabilitar el scroll al montar el componente
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Habilitar el scroll cuando el componente se desmonte
    return () => {
      enableBodyScroll();
    };
  }, []);
  let userCredential;
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleLogin = async () => {
    try {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      const userDocRef = doc(db, 'players', userId);
      const getUserData = async () => {
        try {
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const userInfo = docSnap.data();
            dispatch(setUserId(userInfo));
          } else {
            console.log('El usuario no existe en la base de datos.');
          }
        } catch (error) {
          console.error('Error al obtener datos del usuario:', error);
        }
      }
      getUserData();
      navigate('/HomeGame');
      dispatch(ShowLogin(false)); 
    }catch (error) {
        console.error('Error al iniciar sesión', error.message);
        // Puedes mostrar un mensaje de error al usuario o manejar el error de otra manera
    }
  };
  return (     
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <img className={styles.img} src="LoginAuten.jpeg"/>
              <div className={styles.rightSide}>
                <div className={styles.titleCloseBtn}>
                  <button onClick={handleClick}> x </button>
                </div>
                <div className={styles.title}>
                  <h1>LOG IN<br/></h1>
                </div>
                <div className={styles.body}>  
                  <form method="POST" className={styles.passwordLogin}>
                    <label for="correo">MAIL</label><br />
                    <input type="text" placeholder="Enter your email" id="correo" name="correo" required
                     onChange={(e) => setEmail(e.target.value)}/><br />
                    <label for="contrasena">PASSWORD</label><br />
                    <input type="password" placeholder="Enter your password" id="contrasena" name="contrasena" require
                     onChange={(e) => setPassword(e.target.value)}/>
                  </form>
                </div>
                <div className={styles.button_container}>
                  <button className={styles.myButton}><img src="steam.png"/></button>
                  <button className={styles.myButton}><img src="google.png"/></button>
                  <button className={styles.myButton}><img src="apple.png"/></button>
                  <button className={styles.myButton}><img src="xbox.png"/></button>
                </div>
                <label className={styles.text2}>
                  <input type="checkbox"/>Stay connected
                </label>
                <button className={styles.boton_con_flecha} onClick={handleLogin}/>
              </div>
            </div>
           </div>
  );
}

export default Login;
