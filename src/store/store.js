import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import reducerFavorite from './Reducer/favoriteReducer'
import reducerLanguage from './Reducer/languageReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
// import { combineReducers } from 'redux'
import combineReducers from './Reducer/combine'

// import thunk from '../../node_modules/redux-thunk/es/index'
import thunk from 'redux-thunk'
// import moviesReducer from './Reducer/moviesReducer'



const store=createStore(reducerFavorite)
// const store=createStore(reducerLanguage)


// const rootReducer = combineReducers({reducerLanguage,reducerFavorite,moviesReducer})
// const store = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))
// // const store=createStore(rootReducer)


export default store