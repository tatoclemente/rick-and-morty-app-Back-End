import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, 
        myFavorites: payload, 
        allCharacters: payload };
    // case ADD_FAV:
    //   return {
    //     ...state,
    //     allCharacters: [...state.allCharacters, payload],
    //     myFavorites: [...state.allCharacters, payload],
    //   };
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
    // case REMOVE_FAV: 
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter((char) => char.id !== +payload), 
    //     allCharacters: state.allCharacters.filter((char) => char.id !== +payload)
  
    //   };
    case FILTER:
     const filterByGender = state.allCharacters.filter((char)=>{
      if(payload !== 'allFavorites'){
        return char.gender === payload
      } else{
        return state.allCharacters
      }})
 
      return {
        ...state,
        myFavorites: filterByGender 
      }
    case ORDER:
      const orden = [...state.allCharacters].sort((a, b) => {
        if(a.id > b.id){
          return payload === "Ascendente" ? 1 : -1
        } else if(a.id < b.id) {
          return payload === "Descendente" ? 1 : -1
        } else {
          return 0
        }
      })
      return {
        ...state,
        myFavorites: orden
      }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
