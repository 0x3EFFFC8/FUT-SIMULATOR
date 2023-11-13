import {useState} from 'react';
import NvarGame from './../../Components/NvarGame/NvarGame';
import styles from './Profile.module.css';
import { useSelector } from 'react-redux';

function Profile() {
  const [post] = useState([{
      id: 1,
      name: 'name 1'
    }]);
  let imgLeague;
  const userData = (useSelector((state) => state.user)).userId;
  if (userData == null){
    imgLeague = 'leagueCampeones.png';
  }
  else if (userData.league == "Legendary Division"){
    imgLeague = 'leagueCampeones.png';
  }
  else if (userData.league == "Champion Division"){
    imgLeague = 'championLeague.png';
  }
  else if (userData.league == "Master Division"){
    imgLeague = 'MasterLeague.png';
  }
  else if (userData.league == "Crystal Division"){
    imgLeague = 'CrystalLeague.webp';
  }
  else if (userData.league == "Gold Division"){
    imgLeague = 'GoldLeague.png';
  }
  else if (userData.league == "Silver Division"){
    imgLeague = 'SilverLeague.webp';
  }
  else if (userData.league == "Bronze Division"){
    imgLeague = 'Lbronce.webp';
  }
 
  return (
    <div className={styles.container}>
      {post.map((p, i) => (
          <NvarGame
            key={p.id}
            name={p.name}
          />
      ))}
      <img className={styles.img} src="ProfileA.png"/>
      {userData ? (
        <>
          <h1 className={styles.namePlayer}>{userData.name}</h1>
          <div className={styles.containerAvatar}>
            <img className={styles.img} src="avatarFinal.png"/>
          </div>
          <div className={styles.containerLeague}> 
          
            <img className={styles.img} src={imgLeague}/>
          </div> 
          <div className={styles.containerData}>
            <h1 className={styles.textLeft}>
              {userData.league}<br/><br/>
              score: {userData.score}<br/>
              Tournaments won: {userData.tournamentsWon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Best season: {userData.bestSeason} <br/>
              Leagues won: {userData.leaguesWon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Previous season: {userData.previousSeason}
            </h1>
          </div>
        </>
        ) : (
        "Cargando datos del usuario..."
      )}
    </div>
  );
}

export default Profile;
