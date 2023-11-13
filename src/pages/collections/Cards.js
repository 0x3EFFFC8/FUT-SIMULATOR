import {useEffect, useState} from 'react';
import { db } from "./../../config/firebase";
import { collection,onSnapshot} from 'firebase/firestore';
import styles from './Cards.module.css'
import NvarGame from './../../Components/NvarGame/NvarGame';
import Card from "./Card";

function Cards(){
    const [post] = useState([{
        id: 1,
        name: 'name 1'
    }]);
 
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = () => {
          try {
            const cardsCollection = collection(db, 'collection');
            
            const unsubscribe = onSnapshot(cardsCollection, (querySnapshot) => {
              const data = [];
              querySnapshot.forEach((doc) => {
                const index = parseInt(doc.id);
                if (index >= 1 && index <= 15) {
                  data.push({
                    id: index,
                    ...doc.data(),
                  });
                }
              });
              setCards(data);
            });
            return () => unsubscribe();
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };
    
        fetchCards();
      }, []);
    
    return (
        <div className={styles.container}>          
            {post.map((p, i) => (
                <NvarGame
                    key={p.id}
                    name={p.name}
                />
            ))}
            <img className={styles.imgFont} src = 'collections.avif'/>
            <div className ={styles.carta}>
                {
                cards.map(card => (   
                    <div className = {styles.posicionCarta} key = {card.id}>
                        <Card name = {card.name} imageSource = {card.image} position = {card.position} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Cards