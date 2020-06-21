import React, { useContext } from 'react';

import { GlobalContext } from '../Context/GlobalStates'

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount < 0 ? '-' : '+';
    const transactionType = transaction.transactionAmount < 0 ? 'minus' : 'plus';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn"
                    onClick={() => delTransaction(transaction.id)}>
                X
            </button>
        </li>
    );
}