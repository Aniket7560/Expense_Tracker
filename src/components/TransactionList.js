import React, { useContext } from 'react'
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    // const context = useContext(GlobalContext);
    
  return (
    <div>
        <h3> History</h3>
        <ul id='list' className='list'>
            {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
            <li className='minus'>
                Cash<span>-$400</span>
                <button className='delete-btn'>x</button>
            </li>
        </ul>
    </div>
  )
}
