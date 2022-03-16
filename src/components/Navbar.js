import './navbar.css'


const Navbar = () => {
    return (
        <nav className= "navbar">
            <h4><a href= "/"> BeSeries</a></h4>
            <ul>
                <li><a href= "/">Home</a></li>
                <li><a href = "/search">Search</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;