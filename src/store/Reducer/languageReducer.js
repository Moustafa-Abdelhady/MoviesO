const InitialState={

    lang:'ar',
}

export default function reducerLanguage(state=InitialState,action){
    switch (action.type) {

        case 'SET_LANGUAGE':
            return {...state,lang: action.payload}

        default:
            return state
    }
}