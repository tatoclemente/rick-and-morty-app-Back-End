import React from "react";
import styled from "styled-components";

 export default function Nave(props) {
  return(
    <NaveContainer>
      <img src={props.img} alt="navesita"/>
    </NaveContainer>
  )
}

// ESTILOS CON STYLED COMPONENTS

const NaveContainer = styled.div`
  position: fixed;
  top:50px;
  left: 0;
  animation: movimiento 10s linear infinite;
  height: 400px;
  width: 400px;
  @media screen and (max-width:700px) {
    left: -100px;
    img{
      height: 150px;
      width: 150px;
    }
   }

  @keyframes movimiento{
    0%{
      transform: translateX(0);
    }
    50%{
      transform: translateX(150vw) scale(-0.5);
    }
    70%{
      transform: translateX(0);
    }
    80%{
      transform: translateY(-15px);
    }
    90%{
      transform: translateY(0px);
    }
    95%{
      transform: translateY(-15px);
    }
    100%{
      transform: translateY(0px);
    }
  }
`