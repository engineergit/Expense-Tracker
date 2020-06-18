import React ,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
    transactions:[
            {id:1 , description:" income 1", transactionamount:1000},
            {id:2 , description:" expense 1", transactionamount:-2000},
            {id:3 , description:" income 2" ,transactionamount:3000},
            {id:4 , description:" expense 2", transactionamount:4000}
                ]
            }
//create global context 
export const GlobalContext = createContext(initialState);
//create a provider for global context
export const GlobalProvider =({children})=> {
    //dispatch msg :sends data how we want create any state    
    const [state, dispatch]=useReducer(AppReducer,initialState);
    
        return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

