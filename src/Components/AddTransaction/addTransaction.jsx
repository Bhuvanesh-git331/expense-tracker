import React, {useContext, useState} from 'react';
import { GlobalContext } from '../Context/globalState';
import '../../App.scss';

export default function AddTransaction() {
    const {addTransaction}=useContext(GlobalContext)
  const [text, setText]=useState('');
  const [number, setNumber]=useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault()

    const data={
        id:Math.floor(Math.random()*100000),
        text:text,
        amount: +number
    }
    addTransaction(data)
  }

  return (
    <>
    <h3>Add New Transaction</h3>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className='form-control'>
      <label htmlFor='text'>
            Text
        </label>
        <input className='inputText' value={text} type='text' onChange={(e=>setText(e.target.value))} placeholder='Enter the text'  />
      </div>

      <div className='form-control'>
      <label htmlFor='bumber'>
            Amount
        </label>
        <input className='inputNum' value={number} type='number' onChange={(e)=>setNumber(e.target.value)} placeholder='Enter the Amount'  />
      </div>

      <button  className='btn'>Add Transaction</button>
      
      
    </form>
    </>
  )
}
