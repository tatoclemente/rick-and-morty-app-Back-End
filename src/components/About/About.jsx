import React from "react";
import Style from '../About/About.module.css'
import FotoGustavo from '../../images/GustavoPH.png'
import ImgRickYMorty from '../../images/Rick-and-morty.png'

export default function About() {
  return (
    <div className={Style.container}>
      <section className={Style.presentation}>
        <div className={Style.textContainer}>
          <h1><span>Hola, mi nombre es</span><br/>Gustavo Clemente</h1>
          <h5>Les presento mi primer proyecto de React</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi nam vero cumque quam error, officiis qui, reprehenderit soluta unde corrupti minus recusandae voluptatum id deleniti sed enim animi quia et?</p>
        </div>
        <div className={Style.photo}>
          <img src={FotoGustavo} alt="foto de Gustavo" />
        </div>
      </section>
      <hr />
      <section className={Style.presentation}>
        <div className={Style.textContainer}>
          <h2>Rick & Morty App</h2>
          <h5>Single Page Aplication</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt modi praesentium in, vitae voluptatem facere esse sed eos delectus corporis a, ut ex, obcaecati libero ab dolore nobis beatae?</p>
        </div>

        <div className={Style.photo}>
          <img src={ImgRickYMorty} alt="iamgen de Rick and Morty" />
        </div>
      </section>
    </div>
  )
}