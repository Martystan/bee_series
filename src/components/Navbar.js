import './navbar.css'
import {useState, useEffect} from 'react'



const Navbar = () => {
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

     
    
    

    const searchTiles = searchResults.map((result, index) =>{
        return <li key = {index}>
            <p>{result.name}</p>
        </li>
})
    const handleOnSubmit=(e)=>{
        e.preventDefault()


        fetch("https://api.themoviedb.org/3/search/tv?api_key=e8d8f61f887dbb73c841557fc8ce3e6b&language=en-US&page=1&query=" + query)
        .then(response=>response.json())
        .then(data => setSearchResults(data.results))

    }

    const handleOnChange = (e)=>{
        setQuery(e.target.value)
    }
     
    return (
        <nav className= "navbar">
            <h4><a href= "/"> BeSeries</a></h4>
            
            <ul>
                <li><a href= "/">Home</a></li>
                <li>
                    <form onSubmit = {handleOnSubmit}>
                        <input  className="search-input" type="search" placeholder='Find series'
                        value={query}
                        onChange={handleOnChange}></input>
                        <button  
                        type='submit'><i className="material-icons">search</i></button>
                    </form>
                    
                </li>
            </ul>
            <div>{searchTiles}</div>
            
            
        </nav>
    )
}

export default Navbar;