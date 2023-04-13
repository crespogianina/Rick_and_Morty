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
                allCharacters:[...state.myFavorites]
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload )
            }
        case FILTER:
            return {
                ...state, 
                myFavorites: state.allCharacters.filter((char) => char.gender === action.payload)
            }
        case ORDER:
            return {
                ...state, 
                myFavorites: action.payload === 'A' ? state.allCharacters.sort((a,b) => a.id < b.id ) : state.allCharacters.sort((a,b) => a.id > b.id ) 
            }
            default:
            return {...state};
    }

}

export default rootReducer
