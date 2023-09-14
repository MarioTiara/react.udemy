import Calender from './Calender'
import './ExpenseItem.css'
function ExpenseItem({date,title, price}){
   
    return (
        <div className="expense-item">
            <Calender date={date}/>
            <div className="expense-item__description ">
                <h2 className='.expense-item h2'>{title}</h2>
                <div className="expense-item__price ">{price}</div>
            </div>
        </div>
    )
}


export default ExpenseItem