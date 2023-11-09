import {useState,useEffect} from 'react';
import { useSelector} from 'react-redux';
import Nvar from './../../Components/Nvar/Nvar';
import styles from './Support.module.css';
import Login from './../../Components/Login/Login';
import { Parallax } from 'react-scroll-parallax';

function Support() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    // Limpia el evento del oyente cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }]);
  const loginState = useSelector((state) => state.login)
  return (
    <div className={styles.container}>
        {post.map((p, i) => (
          <Nvar
            key={p.id}
            name={p.name}
          />
        ))}

        <div className={styles.margenM}></div>
        <div className={styles.paralax1}>
          <Parallax speed={20}>
            <img className={styles.parallax1img} src="Estadio1.jpg" />
          </Parallax>
        </div>
        
        <img className={styles.copa} src="copa.png" />
         <div className={styles.paralax2}> 
          <Parallax speed={-20}>
          <img className={styles.champions2} src="UCL.png"/>
          <img className={styles.parallax2img} src="SuportMid.jpg" />
          <img className={styles.champions1} src="UCL.png" />
          </Parallax>
        </div>
       
        <div className={styles.section}>
          <h1 className={styles.contactUs} ><br/>! CONTACT US ¡</h1>
        </div>

        <div className={styles.margenM}></div><div>
        
          <div className={styles.paralax3}>
          <Parallax speed={-20}>
          <img className={styles.parallax3img} src="blueL.gif" />
          </Parallax>
          </div>
       
        <div className={styles.containerB_L}>
            <h1 className={styles.text}>
            Futsimulator@papucho.com<br />
            Av 6C No 13-69, C.P 76001
            </h1>
            <div className={styles.container_text2}>
            <h1 className={styles.text22}>Legal</h1>
            <h1 className={styles.text22}>Terms of Service</h1>
            </div>
            <div className={styles.container_text}>
             <h1 className={styles.text2}>Corporation</h1>
              <h1 className={styles.text2}>Privacy Policy</h1>
            </div>
          </div>
        <div className={styles.button_container}>
            <button className={styles.myButton}><img src="facebook.png"/></button>
            <button className={styles.myButton}><img src="ig.webp"/></button>
            <button className={styles.myButton}><img src="blu.jpg"/></button>
            <button className={styles.myButton}><img src="yt.png"/></button>
        </div>  
          <p className= {styles.textDise}>
            ©2023 FutSimulator. All rights reserved 
          </p>
        </div>
      {loginState.valueL === true && <Login/>}
    </div>
  );
}

export default Support;
