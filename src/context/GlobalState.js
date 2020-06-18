<<<<<<< HEAD
import React , {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
=======
import React ,{createContext} from 'react';
//import AppReducer from './AppReducer';
>>>>>>> 2a7d8557759978927b242ca33ca76282d2f82de2
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
<<<<<<< HEAD
//create a provider for global context 
export const GlobalProvider = ({children})=>{
    const [state] = useReducer(AppReducer,initialState)
    return(
=======
//create a provider for global context
export const GlobalProvider =({children})=> {
    //dispatch msg :sends data how we want create any state    
    //const [state, dispatch]=useReducer(AppReducer,initialState);
    
        return(
>>>>>>> 2a7d8557759978927b242ca33ca76282d2f82de2
        <GlobalContext.Provider value={
            {
                //transactions:state.transactions
                transactions: initialState.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}


// const [state , AppReducer ]=useReducer( AppReducer,initialState);
    //dispatch msg :sends data how we want create any state    
    //it tellse reducer that button is clicked action trigger
    // function addNewTransaction(transaction){
        //     dispatch({type:"INCREMENT_TRANSACTION",payload})
        // }   
        // const [state, AppReducer]= useReducer(AppReducer ,initialState )