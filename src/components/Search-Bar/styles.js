import styled from "styled-components";

export const SearchContainer = styled.div`
  /* margin-left: 95px; */
  background-color: hsla(265, 59%, 57%, 0.768);
  padding: 5px 0 5px 7px;
  border-radius: 5px;
  margin: 0 auto;
  input{
    margin-right: 6px;
    height: 25px;
    border: 1.5px solid #c6c6c6;
    border-radius: 5px;
    padding: 0 5px;
  }

  button{
    height: 25px;
    width:70px;
    padding: 0 5px;
    margin: 0 7px;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    transition: .4s ease-in-out;
    &:hover{
      background-color: rgb(18, 162, 61);
      text-shadow: .7px .7px 3px black;
      cursor: pointer;
    }
  }
`