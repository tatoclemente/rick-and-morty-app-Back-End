import React from "react";
import styled from "styled-components";

const Bienvenida = () => {
    return (
        <Container>
            <h1>¡Bienvenido al Universo de Rick and Morty!</h1>
            <h3>Comience a descubrir sus personajes favoritos y diviertase...</h3>
        </Container>
    )
}

export default Bienvenida;

const Container = styled.div`
    width: 50em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10% auto;
    color: #fff;
    background-color: rgba(0,0,0,.5);
    padding: 40px;
    border-radius: 25px;

    h1{
        font-size: 1.5rem;
        text-transform: uppercase;
        margin-bottom: 30px;
    }
`