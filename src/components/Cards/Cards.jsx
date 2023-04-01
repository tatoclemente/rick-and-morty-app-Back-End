import React from 'react';
import styled from 'styled-components'
import Card from '../Card/Card';
import Navesita from '../Navesita/navesita.jsx'
import Nave from '../../assets/navesita.png'

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
      <Navesita
        img={Nave} />
      { showCards }
    </CardsContainer>
   );
}
// ESTILOS CON STYLED COMPONENTS

const CardsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   max-width: 1200px;
   justify-content: center;
   align-items: center;

   margin: 150px auto 0;

   @media screen and (max-width:700px){
      flex-direction: column;
      align-items: center;
   }
`