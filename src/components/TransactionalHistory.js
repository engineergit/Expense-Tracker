import React , {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';
export const TransactionalHistory = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <div>
           
            <div>
                <h3>Transactional History</h3>
                <ul className="list">
                    {transactions.map(transaction =>(
                   <Transaction key={transaction.id} transaction={transaction}/>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}
