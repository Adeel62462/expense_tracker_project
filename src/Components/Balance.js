import React, { useContext } from "react";

import { GlobalContext } from '../Context/GlobalStates';

export function Balance() {

    const { transactionList } = useContext(GlobalContext);
    const transactionAmounts = transactionList.map(transaction => transaction.transactionAmount);
    const currentBalance = transactionAmounts.reduce((acc, transaction) => (acc += transaction), 0);

    return (
        <div className="balance-container">
            <h4>current balance</h4>
            <h1>{currentBalance < 0 ? "-" : ""}${Math.abs(currentBalance).toFixed(2)}</h1>
        </div>
    );
}