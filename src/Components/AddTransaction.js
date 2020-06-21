import React, { useState, useContext } from 'react';

import { GlobalContext } from '../Context/GlobalStates';

export function AddTransaction() {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    function onSubmit(e) {
        e.preventDefault();

        if(amount!==0){
            const newTransaction = {
                id: new Date().getTime(),
                description,
                transactionAmount: Number(amount)
            };
    
            addTransaction(newTransaction);
        }
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text"
                        required
                        placeholder="Detail of Transaction"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="trnasactionAmount">Transaction Amount</label>
                    <span id="amountRestriction"> (Add Minus(-) Before Amount For Expense)</span>
                    <input type="number"
                        required
                        id="transactionAmount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Dollar Value of Transaction"
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
}