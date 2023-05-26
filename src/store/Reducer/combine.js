// import { combineReducers } from "redux";
// import  combineReducers  from "redux";
// import combineReducers from '../Reducer/'
import { combineReducers } from "redux";
import reducerFavorite from "./favoriteReducer";
import reducerLanguage from "./languageReducer";
import moviesReducerThunk from "./moviesReducer";

export default combineReducers({
    
    favorites:reducerFavorite,
    // favoriteCounter:reducerFavorite,
    moviesThunk:moviesReducerThunk,
    lang:reducerLanguage,
})