import { useState } from 'react'
import './App.css'
import ExpenseDataTable from './Component/ExpenseDataTable'
import ExpenseForm from './Component/ExpenseForm'
import ExpenseData from './ExpenseData'

function App() {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    ammount: '',
    email: ''
  })
  const [expenses, setExpenses] = useState(ExpenseData)
  const [edingRowId, setEdingRowId] = useState('')


  return (
    <main className='mainClass'>
      <h1>Track Your Expense</h1>
      <div className='expensesData'>
        <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} edingRowId={edingRowId} setEdingRowId={setEdingRowId}/>
        <ExpenseDataTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} setEdingRowId={setEdingRowId}/>
      </div>
    </main>
  )
}

export default App
