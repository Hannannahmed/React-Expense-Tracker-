import React from 'react'
import './Expensedate.css'

const Expensedate = (props) => {
  const day = props.date.toLocaleString('en-Us',{day :'2-digit'})
  const month = props.date.toLocaleString('en-Us',{month :'short'})
  const year = props.date.getFullYear();
  return (
    <div className='expense-item__date'>
    <div className='month'>{month}</div>
    <div className='year'>{year}</div>
    <div className='day'>{day}</div>
    </div>
  )
}

export default Expensedate