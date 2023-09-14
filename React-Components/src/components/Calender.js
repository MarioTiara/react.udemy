export default function Calender (props){
    const {month, day, year}=dateHelper(props.date)
    return (
        <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
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