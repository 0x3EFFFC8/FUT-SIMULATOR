import React from 'react'
import './Card.module.css'

function Card({name, imageSource, position}){
    return (
        <div className='card'style={{ backgroundColor: 'gold', color: 'black', padding: '20px' }} >
            <img src = {imageSource} alt = "" ></img>
            <div >
                <h4> {name} </h4>
                <p >  {position} </p>
            </div>
        </div>
    )
}


export default Card