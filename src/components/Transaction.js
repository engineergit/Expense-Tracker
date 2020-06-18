import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <div>
            <li className="plus">
                        {transaction.description}
                        <span>{transaction.transactionAmount}</span>
                    <button className="delete-btn">x</button>
            </li>        
        </div>
    )
}
