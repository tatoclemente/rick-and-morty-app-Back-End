import React from "react";
import style from './About.module.css'
import FotoGustavo from "images/GustavoPH.png";
import ImgRickYMorty from "images/Rick-and-morty.png";
import { useInView } from "react-intersection-observer";

export default function About() {

  const { ref: myRef, inView: myElementIsVisible } = useInView({
    rootMargin: "10px",
    threshold: 0.1,
  })
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView({
    threshold: 0,
  })
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView({
    rootMargin: "10px",
    threshold: 0,
  })


  return (
    <div className={style.container}>
      <div className={style.presentacion} ref={myRef}>
        <div className={`${style.textContainer} ${myElementIsVisible? style.entradaIzquierda : ''}`}>
          <h1>
            <span>Hola, mi nombre es</span>
            <br />
            Gustavo Clemente
          </h1>
          <h3>Algo sobre mí...</h3>
          <p>
            Soy de un pequeña ciudad llamada Las Varillas, ubicada en el interior de la provincia de Córdoba. <br />
            Me apasiona crear cosas, soy muy curioso y no me gusta quedarme con dudas, siempre busco las respuestas. <br />
            Estoy convencido que la tecnología es la principal herramienta para hacer, que nuestro mundo, sea un poquito mejor cada día! 
          </p>
        </div>
        
        <div className={`${style.imageContainer} ${myElementIsVisible ? style.entradaDerecha : ''}`}>
          <img src={FotoGustavo} alt="foto de Gustavo" />
        </div>
      </div>
      <div ref={myRef1}>
        <div  className={`${style.line} ${myElementIsVisible1 ? style.animationLine : ''} `}></div>  
      </div>

      <div ref={myRef2} className={style.presentacion} >
        <div className={`${style.textContainer} ${myElementIsVisible2 ? style.entradaIzquierda : ''}`}>
          <h2>Rick & Morty App</h2>
          <h3>Les presento mi primer proyecto de React</h3>
          <p>
            Se trata de un proyecto integrador de la carrera Full Stack Developer, dónde aplico todo lo aprendido en el bootcamp de Henry.
            <br /> Comenzamos construyendo el Front-End con React, las rutas con react-router, los estilos con CSS puro, usando CSS Modules y tambien 
            styled-components. <br /> 
            Manejamos los estados globales con Redux, y los componentes con hooks. <br />
            Continuamos creando nuestra aplicación Back-End con Node y Express. <br />
          </p>
        </div>

        <div className={`${style.imageContainer} ${myElementIsVisible2 ? style.entradaDerecha : ''}`}>
          <img src={ImgRickYMorty} alt="iamgen de Rick and Morty" />
        </div>
      </div>
    </div>
  );
}

