import './navbar.css'


const Navbar = () => {
    return (
        <nav className= "navbar">
            <h4><a href= "/"> BeSeries</a></h4>
            <ul>
                <li><a href= "/">Home</a></li>
                <li>
                    <input type="search" placeholder='Find series'></input>
                    <button type='submit'>GO</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;