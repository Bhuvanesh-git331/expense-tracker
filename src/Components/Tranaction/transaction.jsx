import React, { useContext } from 'react';
import { GlobalContext } from '../Context/globalState';
import '../../App.scss';

export default function Transaction({transaction}) {
    
    const {deleteTranscation}=useContext(GlobalContext)
    
    const sign=transaction.amount > 0 ?'+' : '-';


  return (
    <li className= {transaction.amount > 0 ?'plus' : 'minus' }>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> <button onClick={()=>deleteTranscation(transaction.id)} className='delete-btn'>x</button>
            </li>
  )
}
