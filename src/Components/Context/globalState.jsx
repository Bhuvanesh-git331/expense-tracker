import { createContext, useReducer } from "react";
import Appreducer from "../Reducers/Appreducer";

const initialState={
    transactions:[
        {id:1, text:'flower', amount:-500},
        {id:2, text:'sandal', amount:690},
        {id:3, text:'play', amount:-590}
    ]
}
  
//create context
export const GlobalContext=createContext(initialState);

//Provider Component
export const GlobalProvider=({children})=>{
    const [state, dispatch]=useReducer(Appreducer, initialState)

    const deleteTranscation=(id)=>{
        dispatch({
            type:'DELETE_TRANS',
            payload:id
        })
    }

    const addTransaction=(data)=>{

        dispatch({
            type:'ADD_TRANSACTION',
            payload:data
        })
    }


    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTranscation,
            addTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    )
}
