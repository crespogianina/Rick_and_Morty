import { ADD_FAV, CHANGE_ACCESS, FILTER, ORDER, REMOVE_FAV } from "./action-types";

let initialState = {
    myFavorites:[],
    allCharacters: [], 
    access: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case REMOVE_FAV:
           return { ...state, allCharacters: action.payload, myFavorites: action.payload};
        
        case FILTER:
            return {
                ...state, 
                myFavorites: action.payload === 'allCharacters' ? [...state.allCharacters] : state.allCharacters.filter((char) => char.gender === action.payload)
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
        case CHANGE_ACCESS:
            return{...state, access: !state.access};
        default:
            return {...state};
    }

}

export default rootReducer
