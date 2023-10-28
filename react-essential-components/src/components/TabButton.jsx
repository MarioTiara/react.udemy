const TabButton =({children, isSelected, ...props})=> {
    function handleClick(){
        console.log("hello mario")
    }
    
    
    return <li>
        <button className={isSelected?'active':undefined} {...props}>
            {children}
        </button>
    </li>
}

export default TabButton