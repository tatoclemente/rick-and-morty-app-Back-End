import React from 'react';
import { CardsContainer } from './styleCards'
import Card from '../Card/Card';




export default function Cards({ characters, onClose}) {
  const showCards = characters.map(({id, name, species, gender, image}) => {
  return <Card 
    key={id}
    id={id}
    name={name}
    species = {species}
    gender = {gender}
    image = {image}
    onClose= {()=>onClose(id)}
    />
  })

   return(
    <CardsContainer>
      { showCards }
    </CardsContainer>
   );
}

