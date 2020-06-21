import React, { useContext } from 'react';

//importing global states
import {GlobalContext} from '../Context/GlobalStates';

//importing transaction component
import { Transaction } from './Transaction';

export function TransactionHistory(){

    const { transactionList } = useContext(GlobalContext);

    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                { transactionList.map( transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                )) }
            </ul>
        </div>
    );
}