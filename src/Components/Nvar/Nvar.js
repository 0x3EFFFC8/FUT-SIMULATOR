import { useState } from "react";
import styles from './Nvar.module.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Nvar({name,getData}) {
    const [showMessage, setshowMessage] = useState(true);
    const[message] = useState('');
    const onButtonClick = () => {
        setshowMessage(! showMessage);
        /*if (message){
            setMessage({message: "Cargando..."});
        }
        getData(10);*/
    }
    return (
        <div className={styles.container}>
            <img src="Logo.png" className={styles.logo}/> 
            <h1 className= {styles.title}>
                <Link className={styles.linea} to = "/">Home</Link>
            </h1>
            <h1 className= {styles.title}>
                <Link className={styles.linea} to = "/news">News</Link>
            </h1>
            <h1 className= {styles.title}>
                <Link className={styles.linea} to = "/support">Support</Link>
            </h1> 
            {
                showMessage ? 
                <p> {message}{}</p>
                :
                null
            }
        </div>
    );
}

export default Nvar;
