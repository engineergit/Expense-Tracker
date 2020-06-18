import React,{useState}  from 'react'

export const AddTransaction = () => {
const [description,setDescription]=useState();
const [transactionamount, setTransactionAmount]=useState();
// const SubmitForm = e =>{
// e.preventDefault();
// const newTransaction = {
//     id:4 , description:" expense 2", transactionamount:-100
// }
// console.log(newTransaction);
// }
    return (
        <div>
            <h2>Add new transaction</h2>
            {/* onSubmit={SubmitForm} */}
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
            Transaction Amount
            </label>    
            <input 
            type="text" 
            id="transactionamount" 
            placeholder="Enter Transaction Amount"
            value={transactionamount}
            onChange={(e) =>setTransactionAmount(e.target.value) }
            />
            </div>
            <button className="btn" type="submit">Add Transaction</button>
            </form>
        </div>
    )
}
