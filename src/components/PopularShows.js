const imageURL = "https://image.tmdb.org/t/p/w200/"

const PopularShows = ({popularShows, onShowClick}) => {
    const popularShowTiles = popularShows.map((popularShow, index) =>{
        const handleClick = () =>{
            onShowClick(popularShow)
        }
        return <li key={index} onClick= {handleClick}>
        <img src={imageURL + popularShow.poster_path} alt={popularShow.name}></img>
        <p>{popularShow.name}</p>
        
        </li>
        
    })
    return (
        <>
        <ul>
            {popularShowTiles}
        </ul>
            
        </>
    )
}


 export default PopularShows;