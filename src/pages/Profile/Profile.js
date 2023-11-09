import {useState} from 'react';
import NvarGame from './../../Components/NvarGame/NvarGame';
import styles from './Profile.module.css';

function Profile() {
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
      <img className={styles.img} src="profileP.avif"/>
      <h1 className={styles.namePlayer}>Unknown</h1>
      <h1 className={styles.tag}>#YHT4JH666</h1>
      <div className={styles.containerAvatar}>
        <img className={styles.img} src="avatarFinal.png"/>
      </div>
      <div className={styles.containerLeague}> 
        <img className={styles.img} src="leagueCampeones.png"/>
      </div> 
      <div className={styles.containerData}>
          <h1 className={styles.textLeft}>
            Legendary Division<br/><br/>
            score: 9999<br/>
            Tournaments won: 12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Best season: 1 <br/>
            Leagues won: 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Previous season: 900
          </h1>
      </div>
    </div>
  );
}

export default Profile;
