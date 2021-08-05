import { SET_LANGUAGE } from "./LanguageTypes";
const LanguageReducer = (state,action) =>{
    switch(action.type){
        case SET_LANGUAGE : {
            return {
                ...state,
                language: action.payload
            }
        }
        default:
            return state
    }
}

export default LanguageReducer