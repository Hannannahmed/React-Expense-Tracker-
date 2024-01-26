import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle,setenteredtitle] = useState('')
  const [enteredAmount,setenteredamount] = useState('')
  const [enteredDate,setentereddate] = useState('')

  const titleChangeHandler = (e) => {
    setenteredtitle(e.target.value)
  }
  const amountChangeHandler = (e) => {
    setenteredamount(e.target.value)
  }
  const dateChangeHandler = (e) => {
    setentereddate(e.target.value)
  }
  const expenseSubmitHandler = (e) =>{
    e.preventDefault();
    const expensedata ={
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date (enteredDate)
    }
   props.onSaveExpenseData(expensedata);
setenteredtitle("")
setenteredamount("")
setentereddate("")

  }

  return (
    <form onSubmit={expenseSubmitHandler}>
<div className='input-controls'>
  <div className='input-control'>
    <label htmlFor='title'>
      Tilte
    </label>
    <input type='text' id='title' value={enteredTitle} required onChange={titleChangeHandler} />
  </div>
  <div className='input-control'>
    <label htmlFor='amount'>
      Amount
    </label>
    <input type='number' id='amount' value={enteredAmount} min="0.01" step="0.01" required onChange={amountChangeHandler} />
  </div>
  <div className='input-control'>
    <label htmlFor='date'>
      Date
    </label>
    <input type='date' id='date' min='2019-01-01' max='2024-01-31' value={enteredDate} onChange={dateChangeHandler} />

  </div>
</div>
<div className='add-expense-btn'>
  <button type='submit'>Add Expense</button>
</div>
   
    </form>
  )
}

export default ExpenseForm