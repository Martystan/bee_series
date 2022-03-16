const PopularShows = ({popularShows}) => {
    const popularShowTiles = popularShows.map((popularShow, index) =>{
        // console.log(popularShow)
        return <li key = {index}>
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