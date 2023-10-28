const TabButton =({children, onSelect, isSelected})=> {
    function handleClick(){
        console.log("hello mario")
    }
    
    
    return <li>
        <button className={isSelected?'active':undefined} onClick={onSelect}>
            {children}
        </button>
    </li>
}

export default TabButton