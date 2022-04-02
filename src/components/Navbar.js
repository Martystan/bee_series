import './navbar.css'
import {useState} from 'react'
import Search from '../pages/Search'


const imageURL = "https://image.tmdb.org/t/p/w200/"

const Navbar = () => {

    
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const searchTiles = searchResults.map((result, index) =>{
        return <li key = {index}>
        <img src = {imageURL + result.poster_path} alt = "poster"></img>
            <p>{result.name}</p>
        </li>
})
    const handleOnClick=(e)=>{
        e.preventDefault()

        fetch("https://api.themoviedb.org/3/search/tv?api_key=e8d8f61f887dbb73c841557fc8ce3e6b&language=en-US&page=1&query=" + query)
        .then(response=>response.json())
        .then(data => setSearchResults(data.results))

    }

    const handleOnChange = (e)=>{
        setQuery(e.target.value)
    }

    return (
        <nav >
            <div className= "navbar">
            <h4><a href= "/"> BeSeries</a></h4>
            
            <ul>
                <li><a href= "/">Home</a></li>
                <li>
                    <form>
                        <input  className="search-input" type="search" placeholder='Find series'
                        value={query}
                        onChange={handleOnChange}></input>
                        
                        <button
                        onClick = {handleOnClick}  
                        type='submit'><i className="material-icons">search</i></button>
                        
                    </form>
                    
                </li>
            </ul>
            </div>
            
            <Search searchTiles = {searchTiles}/>
            
            
            
        </nav>
    )
}

export default Navbar;