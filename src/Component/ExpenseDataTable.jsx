import { useState } from "react";
import { UseFilter } from "../Hooks/UseFilter";
import ContextMenu from "./ContextMenu";


function ExpenseDataTable({ expenses, setExpenses, setExpense, setEdingRowId }) {
    // const [category, setCategory] = useState('')
    const [result, setQuery] = UseFilter(expenses, (data) => data.category)
    const [contextPosition, setContextPosition] = useState({})
    const [rowId, setRoeId] = useState('')

    console.log("result", result);
    const totalBalance = result.reduce((accumalator, current) => {
        return accumalator + parseInt(current.ammount)
    }, 0)
    console.log("total bal", totalBalance);
    return (
        <div className='tableData'>
            <div className='tableForm'>
                <ContextMenu
                    contextPosition={contextPosition}
                    setExpense={setExpense}
                    expenses={expenses}
                    setContextPosition={setContextPosition}
                    setExpenses={setExpenses}
                    rowId={rowId}
                    setEdingRowId={setEdingRowId}
                />
                <table className='table' onClick={() => setContextPosition({})}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>
                                <select onChange={(e) => { setQuery(e.target.value.toLowerCase()) }} className="selctOptions">
                                    <option hidden='hidden'>All</option>
                                    <option value="grocery">Grocery</option>
                                    <option value="clothesb">Clothes</option>
                                    <option value="bills">Bills</option>
                                    <option value="education">Education</option>
                                    <option value="medicine">Medicine</option>
                                </select>
                            </th>
                            <th>Email</th>
                            <th>Ammount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result.map(({ id, title, category, ammount, email }) =>
                                <tr key={id}
                                    onContextMenu={((e) => {
                                        e.preventDefault()
                                        setContextPosition({ left: e.clientX + 4, top: e.clientY + 4 });
                                        setRoeId(id)
                                    })}>
                                    <td>{title}</td>
                                    <td>{category}</td>
                                    <td> {email}</td>
                                    <td>₹ {ammount}</td>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="total">Total</td>
                            <td></td>
                            <td></td>
                            <td className="total">${totalBalance}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default ExpenseDataTable