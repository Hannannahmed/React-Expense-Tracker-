import React,{useState} from "react";
import Expense from "./components/Expense/Expense";
import './App.css'
import NewExpense from "./components/NewExpenses/NewExpense";
const dumyExpenses = [
  {
  id : 0,
  title :"Stranger book",
  amount:200,
  date : new Date(2023 , 1 , 23),
  
},
  {
  id : 1,
  title :"A book",
  amount:500,
  date : new Date(2020 , 10 , 23),
  
},
  {
  id : 2,
  title :"CS book",
  amount:1000,
  date : new Date(2019 , 11 , 23),
  
}
]
function App() {
const [expenses,setexpenses] =useState(dumyExpenses)
const getExpenseDataHandler =(data) => {
setexpenses((preState)=>{
  return [data,...preState]
})
}
  return (
<>


<div className="App">
  <h1 >Expense Tracker</h1>
  <NewExpense onGetExpenseData={getExpenseDataHandler}/>
  <Expense expenses ={expenses} />
</div>
 



</>
  );
}

export default App;
