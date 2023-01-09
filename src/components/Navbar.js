import './navbar.css'
import {useState} from 'react'
import Search from '../pages/Search'
import Show from '../pages/Show'
import { Link } from 'react-router-dom'


const imageURL = "https://image.tmdb.org/t/p/w200/"

const Navbar = () => {

    
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const[selectedShow, setSelectedShow] = useState(null)

    const onShowClick = (show) => {
        
        setSelectedShow(show)
        console.log(show)
        
    }

//     const searchTiles = searchResults.map((result, index) =>{
//         return <li key = {index}>
//         <img className= "search-poster" src = {imageURL + result.poster_path} alt = "poster"></img>
//             <p>{result.name}</p>
//         </li>
// })
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
                <div className="logo">
                    <img  className="bee" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8e5f473-0143-4402-ad03-6168c0064bd5/ddeyl4i-f1cf5cc8-39c1-4ff9-af27-24552db05200.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZTVmNDczLTAxNDMtNDQwMi1hZDAzLTYxNjhjMDA2NGJkNVwvZGRleWw0aS1mMWNmNWNjOC0zOWMxLTRmZjktYWYyNy0yNDU1MmRiMDUyMDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MDUcvX9EsLsu0pWiZhnGi4eN6BzuKnnkZbnmIlpK6og" alt= "bee"></img>
                    <h4><a href= "/"> BeeSERIES</a></h4>
                    
                    <Link to="/"><span className="menu-item"><a href= "/">HOME</a></span></Link>
                    <Link to="/to-watch"><span className="menu-item"><a href= "/">TO WATCH</a></span></Link>
                </div>

                
            
            
            <ul className="links_searchbar">
                
                <li>
                    <form className='search'>
                        <input  className="search-input" type="search" placeholder='Find series'
                        value={query}
                        onChange={handleOnChange}></input>
                        
                        <button
                        className="search-icon"
                        onClick = {handleOnClick}  
                        type='submit'><span className="material-symbols-outlined">
search
</span></button>
                        
                    </form>
                    
                </li>
            </ul>
            </div>
           
            
            <Search searchResults = {searchResults} onShowClick={onShowClick}/>
            {selectedShow ? <Show selectedShow= {selectedShow}/>: null}

            
            
            
            
        </nav>
    )
}

export default Navbar;