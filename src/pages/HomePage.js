import {useState, useEffect} from "react"

// components
import PopularShows from "../components/PopularShows";

const HomePage = () => {

    const[popularShows, setPopularShows] = useState([]);

    const fetchPopularSeries = ()=>{
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=e8d8f61f887dbb73c841557fc8ce3e6b&language=en-US&page=1")
        .then(response =>response.json())
        .then(data => setPopularShows(data.results))
        
    }

    useEffect(fetchPopularSeries,[])

    const ShowList = ()=>{
        return <p> There should be shows here, but there aren't!!!</p>
    }

   

    return (
        <div>
            <h2>Popular now</h2>
            <PopularShows  popularShows={popularShows}/>
            <ShowList/>
            
        </div>
    )
}

export default HomePage;
