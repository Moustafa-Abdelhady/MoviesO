
// import {actionFavorites} from "../Action/favoriteAction"
import {  REMOVE_FROM_FAVORITE } from "../Action/favoriteAction";
import {  SET_FAVORITE } from "../Action/favoriteAction";
const InitialState={
    
    favorites:[],
    favoriteCounter:0,
    
}

export default function reducerFavorite(state=InitialState,action){
    switch(action.type){

        case SET_FAVORITE:
            return {...state,
                favorites:[...state.favorites, action.payload],
                    favoriteCounter:state.favoriteCounter +1 }

        case REMOVE_FROM_FAVORITE:
            return {...state,
                    favorites:state.favorites.filter(movie => movie.id !== action.payload),
                        favoriteCounter:state.favoriteCounter -1}

        default:
            return state
    }
}

