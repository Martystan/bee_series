const imageURL = "https://image.tmdb.org/t/p/w200/"

const TopRatedShows = ({topRatedShows}) => {
    const topRatedShowTiles = topRatedShows.map((topRatedShow,index)=>{
        return <li key = {index}>
            <img src = {imageURL + topRatedShow.poster_path} alt = {topRatedShow.name}></img>
            <p>{topRatedShow.name}</p>

        </li>
    })
    return (
        <>
        <ul>
            {topRatedShowTiles}
        </ul>
            
        </>
    )
}

export default TopRatedShows;