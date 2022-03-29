import {useState, useEffect} from "react"

const Search = () => {
    const [searchResults, setSearchResults] = useState([])

    const fetchSearchResults=()=>{
        fetch("https://api.themoviedb.org/3/search/tv?api_key=e8d8f61f887dbb73c841557fc8ce3e6b&language=en-US&page=1&query=two%20and&include_adult=false")
        .then(response=>response.json())
        .then(data => setSearchResults(data.results))
        
    }

    useEffect(fetchSearchResults,[])

    const searchTiles = searchResults.map((result, index) =>{
            return <li key = {index}>
                <p>{result.name}</p>
            </li>
    })

    return (
        <ul>
            {searchTiles}
        </ul>
    )
}

export default Search;
