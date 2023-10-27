import reactImg from '../assets/react-core-concepts.png'


const reactDescriptions=['Fundamentals', 'Crucial', 'Core']
function getRandomInt(max){
    return Math.floor(Math.random() * (max+1))
}
function Header (){
    const decription = reactDescriptions [getRandomInt(2)]
    return (
        <header>
            <img src={reactImg} alt='Stylezed atom'/>
            <h1>React Essentials</h1>
            <p>
                {decription} React concepts you will need to almost any going to buld!
            </p>
        </header>
    )
}

export default Header