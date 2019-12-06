import React from 'react';
import './card.styles.css';

export const Card = (props)=>(
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}2?set=set2`}></img>
        <h1>{props.monster.name}</h1>
    </div>  
);