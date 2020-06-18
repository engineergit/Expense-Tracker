
import React , {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
//initial state
const initialState = {
    transactions:[
            {id:1 , description:" income 1", transactionamount:1000},
            {id:2 , description:" expense 1", transactionamount:-200},
            {id:3 , description:" income 2" ,transactionamount:3000},
            {id:4 , description:" expense 2", transactionamount:-100}
                ]
            }
//create global context dosri state men use kar saken 
export const GlobalContext = createContext(initialState);
//create a provider for global context 
export const GlobalProvider = ({children})=>
            {
    const [state]=useReducer( AppReducer,initialState)
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
    
    //dispatch msg :sends data how we want create any state    
    //it tellse reducer that button is clicked action trigger
    // function addNewTransaction(transaction){
        //     dispatch({type:"INCREMENT_TRANSACTION",payload})
        // }   
        // const [state, AppReducer]= useReducer(AppReducer ,initialState