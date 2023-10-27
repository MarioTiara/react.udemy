const TabButton =(props)=> {
    function handleClick(){
        console.log("hello mario")
    }
    
    
    return <li>
        <button onClick={handleClick}>{props.children}</button>
    </li>
}

export default TabButton