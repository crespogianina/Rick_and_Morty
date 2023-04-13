import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

let initialState = {
    myFavorites:[],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state, 
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters:[...state.allCharacters, action.payload]
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((char) => char.id !== action.payload ),
                allCharacters: state.allCharacters.filter((char) => char.id !== action.payload )
            }
        case FILTER:
            return {
                ...state, 
                myFavorites:
                action.payload === 'allCharacters' ?
                [...state.allCharacters]
                : state.allCharacters.filter((char) => char.gender === action.payload)
            }
        case ORDER:
            const {allCharacters} = state
            return {
                ...state, 
                myFavorites:
                action.payload === 'A' 
                ? allCharacters.sort((a,b) => a.id - b.id ) 
                : allCharacters.sort((a,b) => b.id - a.id   ) 
            }
            default:
            return {...state};
    }

}

export default rootReducer
