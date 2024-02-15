import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//initial state


const initialState = {
    transactions: [
        {id: 1, text: 'cakes', amount: 2600},
        {id: 2, text: 'maniPedi', amount: 2000},
        {id: 3, text: 'gummies', amount: -270},
        {id: 4, text: 'cookies', amount: -900}
    ]
}

// create context

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider =({children}) =>{
    const [state, dispatch]=useReducer(AppReducer, initialState);
    return(
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}