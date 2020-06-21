import React from 'react';
import './App.css';

//importing components
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { AccountSummary } from './Components/AccountSummary';
import { TransactionHistory } from './Components/TransactionHistory';
import { AddTransaction } from './Components/AddTransaction';

//importing provider
import { GlobalProvider } from './Context/GlobalStates';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
