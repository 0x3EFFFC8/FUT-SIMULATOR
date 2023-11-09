import {useState,useEffect} from 'react';
import NvarGame from './../../Components/NvarGame/NvarGame';
import styles from './HomeGame.module.css';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function HomeGame() {
  const navigate = useNavigate();
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

  const handleFormations = () => {
    navigate('/Formations');
  };

  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }]);

  return (
    <div className={styles.container}>
      {post.map((p, i) => (
          <NvarGame
            key={p.id}
            name={p.name}
          />
      ))}
      <div className={styles.futSim}>
          <img className={styles.imgFutSim} src="homeLog.png"/>
          <h1 className={styles.titleP}>¿ QUE ES FUT <br /> SIMULATOR ?</h1>
          <p className={styles.parrafo}> 
            Fut simulator es un simulador de ultimate Team, en donde podras
            crear tu<br /> equipo soñado con mas de 10.000 jugadores seleccionables
            para poder asi <br /> diseñar tu equipo, dandote acceso y versatilidad 
            a todas las formaciones
          </p>
          <button className={styles.buttonAp}> Aprende a Jugar </button>
        </div>
        <div className={styles.containerN}>
          <div className={styles.slider}>
                <div className={styles.noticia}>
                  <img src="n6.jpg"></img>    
                  <a className={styles.linkN}> No te pierdas la llegada de nuevas cartas, idolos estrella super especiales </a>      
                </div>
                <div className={styles.noticia}>
                  <img src="n3.png"></img>
                  <a className={styles.linkN}> Proximamente nueva actualizacion 2023.45 </a>
                </div>
                <div className={styles.noticia}>
                  <img  src="n2.png"></img>
                  <a className={styles.linkN}> Balance de Cartas Conoce los cambios que se realizaran en el proximo parche </a>
                </div>
                <div className={styles.noticia}>
                  <img  src="n4.jpg"></img>
                  <a className={styles.linkN}> Nuevo Pase de batalla de la ultima temporada </a>
                </div>
                <div className={styles.noticia}>
                  <img  src="n5.jpeg"></img>
                  <a className={styles.linkN}> Proximamente un nuevo modo de Juego, Sigues la pistas y mira de que se trata </a>
                </div>
                <div className={styles.noticia}>
                  <img  src="n1.jpg"></img>
                  <a className={styles.linkN}> Listo para la nueva temporada estamos preparando esos nuevos fichajes </a>
                </div>          
          </div>
        </div>
        <div className={styles.containerExp}>
        <h1 className={styles.tileE} style={{ top: '0.9%', left: '31%'}}>¿ COMO JUGAR ?</h1>
        <div className={styles.subConExp}  style={{ top: '4.8%'}}> 
          <h1 className={styles.tileE} style={{ top: '5%', left: '53%'}}> CÓMO EMPEZAR </h1>
          <a className={styles.parraEx} style={{ top: '25%', left: '43%', fontSize: "26px"}}> 
              Comienza tu juego en Fut Simulator eligiendo entre cinco formaciones distintas.<br />
              Piensa bien antes de elegir la formación que elijas será tu formación <br />
              predeterminada durante toda la serie de partidos. ¿Elegirás una <br />
              formación que ya conoces bien o te atreverás con una totalmente nueva para ti?
          </a>
        </div>
        <img className={styles.imgExp1} style={{top:'6.5%'}} src="p1.jpeg"></img>

        <h1 className={styles.tileE} style={{ top: '27%', left: '10%'}}> ELIGE A TU CAPITAN </h1>
          <a className={styles.parraEx} style={{ top: '33%', left: '2%', fontSize: "22px"}}> 
              Después de elegir la formación, llega el momento de crear tu propia plantilla. <br />
              El capitán será el primer jugador que deberás elegir de entre una selección de <br />
              cualquier superestrella que tu desees.
              Al colocar juntos a jugadores del mismo club, liga o nacionalidad, crearás vínculos en tu equipo. <br /><br />
              Cuanto más tengan en común, más fuerte será el vínculo de química<br />
              y más se potenciarán por eso debes elegir a tu capitan sabiamente <br />
              pues segun este podras empezar a  mejorar esos aspectos de tu equipo <br />
              y con ello poder elegir a los demas  jugadores de tu plantilla.
          </a>

        <img className={styles.imgExp2} src="p2.jpg"></img>

        <div className={styles.subConExp}  style={{ top: '50%'}}> 
          <h1 className={styles.tileE} style={{ top: '4%', left: '50%'}}> COMPLETA TU PLANTILLA </h1>
          <a className={styles.parraEx} style={{ top: '36%', left: '43%', fontSize: "23px"}}> 
            A partir de aquí, completa el resto de tu plantilla de 23 hombres eligiendo <br />
            al jugador que desees recuerda debes tener en cuenta caracteristicas como su puesto, calidad, disparo, pase ,entre otros.<br />
             Deberás hacer frente a interesantes desafíos a la hora de crear tu equipo: <br />
             ¿escoger al jugador mejor valorado en esa posición o centrarte en obtener <br />
             el máximo de Química? Prueba diferentes combinaciones y observa cuál te viene mejor.<br />
              
          </a>

        </div>
        <img className={styles.imgExp3} src="p3.jpg"></img>
          <h1 className={styles.tileE} style={{ top: '70.5%', left: '10%'}}> JUEGA CON LOS MEJORES </h1>
          <a className={styles.parraEx} style={{ top: '76%', left: '2%', fontSize: "21px"}}>
              Después de elegir a tu 11 inicial, los suplentes y los reservas, podrás mover a <br />
              tus jugadores para mejorar la valoración de Química. Cuando estés listo, habrá <br />
              llegado el momento de poner a tu equipo sobre el césped para desafiar a <br />
              tus rivales en una competición de cuatro partidos. <br /><br />
              Podrás competir como Un jugador o jugar online contra rivales de todo el mundo.<br />
              A medida que avances, ganarás mejores recompensas, como Monedas, sobres y mucho más.<br /> 
         </a>
        <img className={styles.imgExp4} src="p4.jpg"></img>
        <h1 className={styles.textAnimar} style={{ top: '90%', left: '24%', fontSize: "15px"}}> 
        LISTO HA LLEGADO EL MOMENTO DE PONER A TU EQUIPO SOBRE EL TERRENO DE JUEGO <br />
        ! ATREVETE DESAFIA A TUS RIVALES  <br /> CONVIERTETE EN EL MEJOR! 
        </h1>
        <button className={styles.buttonPLAY} onClick={handleFormations}> Juega Ahora </button>
        <div className= {styles.divisor2}>
          <p>
            ©2023 FutSimulator. All rights reserved 
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeGame;
