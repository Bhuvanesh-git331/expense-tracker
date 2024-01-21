import React, {useContext} from 'react';
import { GlobalContext } from '../Context/globalState';
import Transaction from '../Tranaction/transaction';

export default function TransactionList() {
    const {transactions}=useContext(GlobalContext)


  return (
    <>
    <h3>History</h3>

    <ul className='list'>
        {
            transactions.map(transaction=>{
                return  <Transaction transaction={transaction} key={transaction.id}  />
            })
        }
       

    </ul>

      
    </>
  )
}
