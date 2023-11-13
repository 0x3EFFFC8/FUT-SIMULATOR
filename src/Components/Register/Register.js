import {useState,useEffect } from 'react';
import { auth, db } from "./../../config/firebase";
import { doc, setDoc, getDoc} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from './Register.module.css';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ShowRegister} from './../../features/login/loginSlice';
import {setUserId} from '../../features/user/userSlice';

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleClick = () => {
      dispatch(ShowRegister(false));
    };
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    
    const handleRegister = async () => {
      let userCredential; 
      if (password.length < 6) {
        console.error('La contraseña debe tener al menos 6 caracteres');
      }
      else{
        if (password === password2){
          userCredential = await createUserWithEmailAndPassword(auth,email,password);
          const userId = userCredential.user.uid;   
          await setDoc(doc(db,'players',userId),{
            name: name +" "+ lastName,
            league: "Bronze Division",
            leaguesWon: 0,
            bestSeason: 0,
            tournamentsWon: 0,
            previousSeason: 0,
            score: 0,
          });
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
          dispatch(ShowRegister(false));
        }
        else {console.error('Las contraseñas no coinciden');}
      };
    };
    return (
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <img className={styles.img} src="registerN.jpeg"/>
              <div className={styles.titleCloseBtn}>
                <button onClick={handleClick}> x </button>
              </div>
              
              <div className={styles.title}>
                <h1><br/>Create new account</h1>
              </div>
              <div className={styles.body}>
                <form method="POST">
                    
                  <label className={styles.label_container}for="Nombre">Name</label>
                  <label className={styles.label_container}for="Apellido">Last name</label>
                  
                  <div className={styles.input_container}> 
                    <input type="text1" id="text1" name="Nombre" required 
                     onChange={(e) => setName(e.target.value)}/><br />
                    <input type="text1" id="text2" name="Apellido" required
                     onChange={(e) => setLastName(e.target.value)}/><br />
                  </div>
                  <div className={styles.password}>
                    <label for="text1">Mail</label><br />
                    <input type="text1" id="text3" name="correo" required
                     onChange={(e) => setEmail(e.target.value)}/>
                    <label for="text1">Password</label><br />
                    <input type="password" id="contrasena" name="contrasena" required
                     onChange={(e) => setPassword(e.target.value)}/><br/>
                    <label for="text1">Confirm Password</label><br />
                    <input type="password" id="contrasena" name="contrasena" required
                     onChange={(e) => setPassword2(e.target.value)}/>
                  </div>
                </form>
              </div>
              <div className={styles.button_container}>
                <button className={styles.myButton}><img src="steam.png"/></button>
                <button className={styles.myButton}><img src="google.png"/></button>
                <button className={styles.myButton}><img src="appleB.png"/></button>
                <button className={styles.myButton}><img src="xbox.png"/></button>
              </div>
              <div className={styles.footer}>
                <button onClick={handleRegister}>Create account</button>
              </div>
            </div>
          </div>
    );
}

export default Register
