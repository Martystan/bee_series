const imageURL = "https://image.tmdb.org/t/p/w200/"

const PopularShows = ({popularShows}) => {
    const popularShowTiles = popularShows.map((popularShow, index) =>{
     
        return <li key = {index}>
        <img src = {imageURL + popularShow.poster_path} alt = {popularShow.name}></img>
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