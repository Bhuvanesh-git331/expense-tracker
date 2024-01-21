import Header from './Header/header';
import Balance from './Components/Balance/balance';
import IncomeExpense from './Components/IncomeExpense/incomeExpense';
import TransactionList from './Components/TransactionList/transactionList';
import AddTransaction from './Components/AddTransaction/addTransaction';
import { GlobalProvider } from './Components/Context/globalState';
import './App.scss';





function App() {
  return (
    <GlobalProvider>
    <div className='app' >
      <Header />

      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
     
    </div>
    </GlobalProvider>
  );
}

export default App;
