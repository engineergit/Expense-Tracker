import React from 'react'

export const TransactionalHistory = () => {
    return (
        <div>
           
            <div>
                <h3>Transactional History</h3>
                <ul className="list">
                    <li className="plus">
                         Project 1 Income
                         <span>$10,000</span>
                    <button className="delete-btn">x</button>
                    </li>
                    <li className="minus">
                        Project 1 salaries
                        <span>$-500</span>
                    <button className="delete-btn">x</button>
                         </li>
                </ul>
            </div>
            
        </div>
    )
}
