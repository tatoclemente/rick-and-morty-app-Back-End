import styled from "styled-components";

export const CardsContainer = styled.div`
   position: relative;
   display: flex;
   flex-wrap: wrap;
   max-width: 1200px;
   justify-content: center;
   align-items: center;

   margin: 150px auto 0;

   @media screen and (max-width:700px){
      flex-direction: column;
      align-items: center;
   }

   
`
export const OptionContainer = styled.div`
   position: absolute;
   top: -80px;
   left:50%;
   margin-left: -210px;
   select{
      margin: 0 30px;
      width: 150px;
      height: 30px;
      background-color: hsla(265, 59%, 57%, 0.768);
      border: none;
      border-radius: 5px;
      color: #fff;
      letter-spacing: 2px;
      padding: 0 5px;
      &:hover{
         background-color: rgba(20, 20, 20, 0.5);;
         box-shadow: 1px 1px 15px 10px rgba(0, 255, 76, 0.4);
      }
   }
   option{
      background-color: #fff;
      color: #222;
   }
`