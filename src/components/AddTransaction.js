import React,{useState}  from 'react'

export const AddTransaction = () => {
const [description,setDescription]=useState();
const [transactionamount, setTransactionAmount]=useState();
    return (
        <div>
            <h2>Add new transaction</h2>
            <form>
            <div className="form-control">
            <label htmlFor="description">
                Description
            </label>
            <input 
            type="text" 
            id="description" 
            placeholder="Enter description"
            value={description} 
            onChange={(e) =>setDescription(e.target.value) }

            />
            </div>
            <div className="form-control">
            <label htmlFor="transactionamount">
            transaction amount
            </label>    
            <input 
            type="text" 
            id="transactionamount" 
            placeholder="enter transaction amount"
            value={transactionamount}
            onChange={(e) =>setTransactionAmount(e.target.value) }
            />
            </div>
            <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
