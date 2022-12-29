const imageURL = "https://image.tmdb.org/t/p/w200/"

const NetflixShows = ({netflixShows, onShowClick}) => {
    const netflixShowTiles = netflixShows.map((netflixShow,index)=>{
        const handleClick=()=>{
            onShowClick(netflixShow)
        }
        return <li className="show-tile" key={index} onClick= {handleClick}>
            <img className= "poster" src = {imageURL + netflixShow.poster_path} alt = {netflixShow.name}></img>
            <p>{netflixShow.name}</p>

        </li>
    })
    return (
        <>
        <ul>
            {netflixShowTiles}
        </ul>
            
        </>
    )
}

export default NetflixShows;