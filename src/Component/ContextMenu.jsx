function ContextMenu({ contextPosition, setContextPosition, setExpenses, rowId, setExpense, expenses,setEdingRowId }) {
    if (!contextPosition.left) return
    return (
        <div className="context_menu" style={{ ...contextPosition }}>
            <div className="menutarget" onClick={() => {
                console.log(rowId)
                const {title,category,ammount,email} = expenses.find((expence) => expence.id === rowId)
                setEdingRowId(rowId)
                setExpense({title,category,ammount,email})
                setContextPosition({});
            }}>Edit</div>
            <div className="menutarget" onClick={() => {
                setExpenses((prevState) => prevState.filter(expense => expense.id !== rowId))
                setContextPosition({});
            }}>Delete</div>
        </div>
    )
}
export default ContextMenu