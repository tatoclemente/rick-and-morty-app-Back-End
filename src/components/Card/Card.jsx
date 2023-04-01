import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import ROUTE from '../../helpers/routes.helpers';


export default function Card({ onClose, name, image, species, gender, id}) {

console.log(id);
   return (
      <CardContainer>
        
          <ButtonClose onClick={onClose}>X</ButtonClose>
          <Link to={`${ROUTE.DETAIL}/${id}`}>
            <Name>{name}</Name>
          </Link>
          <ImageCard  src={image} alt={'foto de ' + name} />
          <AttContainer>
            <Attributes><span>Specie: </span>{species}</Attributes>
            <Attributes><span>Gender: </span>{gender}</Attributes>  
          </AttContainer> 
        
      </CardContainer>
   );
}

// ESTILOS CON STYLED COMPONENTS

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #e5e5e5;
  width: 230px;
  height: 280px;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,.4);
  border-radius: 10px;
  border: 1.5px solid #c6c6c6;
  margin: 15px 40px;
  transition: .5s ease-in-out;
  overflow: hidden;
 
  &:hover{
    transform: scale(1.05);
    box-shadow: 1px 1px 15px 10px rgba(0, 255, 76, 0.4);
    border: 1.5px solid rgb(0, 255, 76);
  }
`
const ButtonClose = styled.button`
  background-color: #2229;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  padding-top: 2px;
  width: 25px;
  height: 20px;
  border: none;
  position: absolute;
  right: 0;
  z-index: 1;
  margin: 5px;
  transition: .4s ease-in-out;
  &:hover{
    background-color: #fb2a2a;
    cursor: pointer;
  };
`
const ImageCard = styled.img`
 position: relative;
 top: 0;
 box-shadow: 0 0 1px 0 5px black;
`
const Name = styled.h1`
  position: absolute;
  /* CENTRADO EN POSITION ABSOLUTE */
  /*Los valores de margin-top y margin-left, se calculan tomando la mitad del alto y ancho definidos del elemento a centrar, respectivamente.*/
  bottom: 50%;
  left: 50%;
  width: 200px;
  height: auto;
  margin-bottom: -85px;
  margin-left: -100px;
  /* --------------------------------------------- */
  background-color: #222C;
  padding: 0 15px 2px;
  border-radius: 15px;
  z-index: 1;
  text-transform: uppercase;
  font-size: 1.1em;
  color: #06eb02cc;
  text-shadow: .5px .5px 5px;
`
const AttContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: -15px;
`
const Attributes = styled.h2`
  span{
    font-weight: 400;
  }
  margin: 0 5px;
  font-size: .8em;
  font-weight: 500;
`
