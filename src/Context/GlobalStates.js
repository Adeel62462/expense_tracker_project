import React, { createContext, useReducer } from 'react';
//importing AppReducer
import AppReducer from './AppReducer';

const initialState = {
    transactionList: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function delTransaction(id){
        dispatch({
            type: "delete_transaction",
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: "add_transaction",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={
            {
                transactionList: state.transactionList,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}