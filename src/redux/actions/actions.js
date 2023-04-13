
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, SET_ACCESS } from "./types";


export const addFav = (character) => {
    console.log(character);
    return {
        type: ADD_FAV,
        payload: character,
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}


export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}

// export const setAccess = () => {
//     return {
//         type: SET_ACCESS
//     }
// }
