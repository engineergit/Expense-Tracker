import React from 'react';
import './App.css';
import Header from './components/Header';
import {Balance} from './components/Balance';
import {AccountSummary} from './components/AccountSummary';
import {TransactionalHistory} from './components/TransactionalHistory';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'
  function App(props) {
  return (
    <GlobalProvider>
    {/* <div> */}
     <Header />
     <div className="container">
     <Balance/>
     </div>
     <AccountSummary/>
     <TransactionalHistory/>
     <AddTransaction/>
     {/* </div> */}
    </GlobalProvider>
  );
}

export default App;
