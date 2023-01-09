import './search.css'

const imageURL = "https://image.tmdb.org/t/p/w200/"

const Search = ({searchResults, onShowClick}) => {
    const searchResultsTiles = searchResults.map((searchResult,index)=>{
        const handleClick=()=>{
            onShowClick(searchResult)
        }
        return <li className="show-tile" key={index} onClick= {handleClick}>
            <img className= "poster" src = {imageURL + searchResult.poster_path} alt = {searchResult.name}></img>
            <p>{searchResult.name}</p>

        </li>
    })
    return (
        <>
        <ul className="search-results">
            {searchResultsTiles}
        </ul>
        
    
        </>
    )
}

export default Search;
