import React from 'react'

export default function IncomeExpense() {
  return (
    <div className='inc-exp-container'>
    <div>
      <h3>Income</h3>  
      <p className='money plus'>+$400</p>
    </div>

    <div>
      <h3>Expense</h3>  
      <p className='money minus'>-$400</p>
    </div>
      
    </div>
  )
}
