import  './App.css';
import Expenses from './Components/Expenses/Expenses';
import React,{useState} from 'react';
import NewExpense from './Components/NewExpenses/NewExpenses';
const Dummy_Expense=[
   {
      
      date:new Date(2022,3,28),
      title:"School fee",
      amount:300,
      id:'e1'
   },
      {
         
         date:new Date(2022,4,2),
         title:"Room rent",
         amount:500,
         id:'e2'
      },
      {
            
            date:new Date(2022,3,20),
            title:"shoes",
            amount:100,
            id:'e3'
         } ,
      {
            
              date:new Date(2022,5,21),
               title:"electricity",
               amount:30,
               id:'e4'
       }];
 const App=()=>{
   const [expenses,setExpenses]=useState(Dummy_Expense);
       const addExpenseHandler=(expense)=>{
        const updatedExpense=[expense,...expenses];
       setExpenses(updatedExpense);
      }
    return(
       <div>
         <NewExpense onAddExpense={addExpenseHandler}/>
         <Expenses item={expenses}/>
       </div>
    );
 }
export default App;
