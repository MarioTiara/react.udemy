const TabButton =({children, onSelect})=> {
    function handleClick(){
        console.log("hello mario")
    }
    
    
    return <li>
        <button onClick={onSelect}>{children}</button>
    </li>
}

export default TabButton