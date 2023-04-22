import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ROUTE from "../../helpers/routes.helpers";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";

function Card({
  onClose,
  name,
  image,
  species,
  gender,
  id,
  addFav,
  removeFav,
  myFavorites
}) {
  const location = useLocation()
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if(isFav) {
      setIsFav(false)
      removeFav(id)
    } else{
      setIsFav(true)
      addFav({
        id,
        name,
        image,
        species,
        gender,
        onClose:{isFav}
     })
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
  return (
    <CardContainer>
      {location.pathname === '/favorites' ?
        <ShowID>
          <p>{id}</p>
        </ShowID> : null
      }

      {isFav ? (
        <ButtonFav onClick={handleFavorite}>❤️</ButtonFav>
      ) : (
        <ButtonFav onClick={handleFavorite}>🤍</ButtonFav>
      )}
      {location.pathname === '/'? <ButtonClose onClick={onClose}>X</ButtonClose>:null}
      {/* {isFav? <ButtonClose onClick={handleFavorite}>X</ButtonClose> :<ButtonClose onClick={onClose}>X</ButtonClose>} */}
    
      
      <Link to={`${ROUTE.DETAIL}/${id}`}>
        <Name>{name}</Name>
      </Link>
      <ImageCard src={image} alt={"foto de " + name} />
      <AttContainer>
        <Attributes>
          <span>Specie: </span>
          {species}
        </Attributes>
        <Attributes>
          <span>Gender: </span>
          {gender}
        </Attributes>
      </AttContainer>
    </CardContainer>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);





// ESTILOS CON STYLED COMPONENTS

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgba(0,0,0,.7);
  width: 230px;
  height: 280px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  border: 1.5px solid #c6c6c6;
  margin: 15px 40px;
  transition: 0.5s ease-in-out;
  /* overflow: hidden; */
  user-select: none;
  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 15px 10px rgba(0, 255, 76, 0.4);
    border: 1.5px solid rgb(0, 255, 76);
  }
`;
const ShowID = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  height: auto;
  margin-bottom: -85px;
  margin-left: -18px;
  z-index: 3;
  padding: 6px 6px;
  border-radius: 50%;
  background-color: rgb(135, 81, 210);
  color: #fff;
`;
const ButtonFav = styled.button`
  position: absolute;
  padding: 2px;
  z-index: 1;
  background-color: transparent;
  border: none;
  font-size: 1.3em;
  text-shadow: 1px 1px 5px black;
  user-select: none;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }
`;
const ButtonClose = styled.button`
  background-color: rgb(135, 81, 210);
  color: #222;
  font-weight: 900;
  border-radius: 4px;
  width: 25px;
  height: 20px;
  border: none;
  position: absolute;
  right: 0;
  z-index: 1;
  margin: 5px;
  transition: 0.4s ease-in-out;
  &:hover {
    background-color: #fb2a2a;
    cursor: pointer;
    font-weight: 400;
    color:#fff;
  }
`;
const ImageCard = styled.img`
  position: relative;
  top: 0;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 1px 5px black;

`;
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
  background-color: #222c;
  padding: 0 15px 2px;
  border-radius: 15px;
  z-index: 1;
  text-transform: uppercase;
  font-size: 1.1em;
  color: #06eb02cc;
  text-shadow: 0.5px 0.5px 5px;
`;
const AttContainer = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-self: center;
  align-items: center;
  padding: 0 5px 2px 5px;
`;
const Attributes = styled.h2`
  span {
    font-weight: 400;
    color: #fff;
  }
  margin: 0 5px;
  font-size: 0.7em;
  font-weight: 500;
  color:rgb(0, 255, 76);
  letter-spacing: 1px;
`;
