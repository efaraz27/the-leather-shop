import React, {useReducer} from "react";
import LanguageContext from "./LanguageContext";
import LanguageReducer from "./LanguageReducer";
import { SET_LANGUAGE } from "./LanguageTypes";

const LanguageState = ({children}) => {
    const initialState = {
        language: 'English',
    }
    const [state, dispatch] = useReducer(LanguageReducer, initialState)
    const setLanguage = (item) => {
        dispatch({type: SET_LANGUAGE, payload: item})
    }
    return(
        <LanguageContext.Provider value={{
            language: state.language,
            setLanguage,
            }}>
                {children}
        </LanguageContext.Provider>
    )
}

export default LanguageState;