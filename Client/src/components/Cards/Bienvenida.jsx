import React from "react";
import style from './Bienvenidos.module.css'
import title from 'images/Rick-and-morty-text.png';

const Bienvenida = () => {
  return (
    <div className={style.container}>
      <h1>Bienvenido al Universo de</h1>
      <img src={title} alt="rick-and-morty-text" />
      <h3>Comience a descubrir sus personajes favoritos y ¡DIVIERTASE!</h3>
    </div>
  );
};

export default Bienvenida;

