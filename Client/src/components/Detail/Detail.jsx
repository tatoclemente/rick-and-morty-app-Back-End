import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Style from "../Detail/Detail.module.css";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char[0].name) {
          setCharacter(char[0]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  if (character) {
    return (
      <div className={Style.container}>
        <Link className={Style.buttonContainer} to='/'>
          <button className={Style.button}>{"<<"} Volver al Home</button>
        </Link>
        <div className={Style.textContainer}>
          <h1 className={Style.title}>{character.name}</h1>
          <section className={Style.info}>
            <h3>
              Status:{" "}
              <span className={Style.characterInfo}>{character.status}</span>
            </h3>
            <h3>
              Specie:{" "}
              <span className={Style.characterInfo}>{character.species}</span>
            </h3>
            <h3>
              Gender:{" "}
              <span className={Style.characterInfo}>{character.gender}</span>
            </h3>
            <h3>
              Origin:{" "}
              <span className={Style.characterInfo}>
                {character.origin?.name}
              </span>
            </h3>
          </section>
        </div>
        <div className={Style.image}>
          <img
            className={Style.characterImg}
            src={character.image}
            alt={`imagen de ${character.name}`}
          />
        </div>
      </div>
    );
  }
}
