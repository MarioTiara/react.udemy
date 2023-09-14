import './ExpenseItem.css'
function ExpenseItem(){
    const expenseDate = new Date(2021,2,28)
    const expensePrice ='$294.64'

    const expenseTtitle ="Car Insurance"
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description ">
                <h2 className='.expense-item h2'>{expenseTtitle}</h2>
                <div className="expense-item__price ">{expensePrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem