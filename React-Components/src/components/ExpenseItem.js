import './ExpenseItem.css'
function ExpenseItem({date,title, price}){
    const {month, day, year}=dateHelper(date)
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description ">
                <h2 className='.expense-item h2'>{title}</h2>
                <div className="expense-item__price ">{price}</div>
            </div>
        </div>
    )
}

function dateHelper(date)
{
    const month = date.toLocaleString('en-US', {month:'long'})
    const day= date.toLocaleString('en-US', {day:'2-digit'})
    const year= date.getFullYear()

    return {month:month, day:day, year:year}
}
export default ExpenseItem