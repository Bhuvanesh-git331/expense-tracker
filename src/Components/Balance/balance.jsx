import React, {useContext} from 'react';
import { GlobalContext } from '../Context/globalState';
import '../../App.scss';

export default function Balance() {
  const {transactions}= useContext(GlobalContext)



 const sum=transactions.reduce((acc, currVal)=>{
    acc+=Number(currVal.amount)
    return acc
 }, 0)

 console.log(sum)

  return (
    <div>
        <h3 className='balance'>Your Balance</h3>
        <h2 className='number'>${sum}</h2>
      
    </div>
  )
}
