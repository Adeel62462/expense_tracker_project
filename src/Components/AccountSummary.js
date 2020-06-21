import React, { useContext } from 'react';

//importing global states
import { GlobalContext } from '../Context/GlobalStates';

export function AccountSummary() {

    const { transactionList } = useContext(GlobalContext);
    const transactionAmounts = transactionList.map(transaction => transaction.transactionAmount);

    const income = transactionAmounts.filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0);
    
    console.log(typeof(Number(income)));

    const expense = transactionAmounts.filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0);


    return (
        <div className="account-container">
            <div>
                <h4>income</h4>
                <p className="money plus">${income.toFixed(2)}</p>
            </div>
            <div>
                <h4>expense</h4>
                <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
            </div>
        </div>
    );
}
