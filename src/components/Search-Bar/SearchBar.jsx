import React, { useState } from "react";
import styled from "styled-components";

export default function SearchBar(props) {
  const [id, setId] = useState();
  const handleChange = (event) => {
    const {value} = event.target
    setId(value)
  }
  
  return (
    <SearchContainer>
      <button onClick={()=>{props.randomSearch()}}>Random</button>
      <input type='search' id="search" onChange={handleChange}/>
      <button onClick={()=>{props.onSearch(id)}}>Agregar</button>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  margin-left: 95px;
  
  input{
    margin: 0 15px;
    height: 25px;
    border: 1.5px solid #c6c6c6;
    border-radius: 5px;
    padding: 0 5px;
  }

  button{
    height: 25px;
    width:70px;
    padding: 0 5px;
    border: none;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    transition: .4s ease-in-out;
    &:hover{
      background-color: #FFED00;
      color: #222;
      cursor: pointer;
    }
  }
`