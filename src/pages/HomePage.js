import {useState, useEffect} from "react"
import './homepage.css'

// components
import PopularShows from "../components/PopularShows";
import TopRatedShows from "../components/TopRatedShows";

const HomePage = () => {

    const[popularShows, setPopularShows] = useState([]);
    const[topRatedShows, setTopRatedShows] = useState([]);

    const fetchPopularSeries = ()=>{
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=e8d8f61f887dbb73c841557fc8ce3e6b&language=en-US&page=1")
        .then(response =>response.json())
        .then(data => setPopularShows(data.results))
        }

    const fetchTopRatedSeries = ()=>{
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=e8d8f61f887dbb73c841557fc8ce3e6b&language=en-US&page=1")
        .then(response => response.json())
        .then(data =>setTopRatedShows(data.results))
    }

    useEffect(fetchPopularSeries,[])
    useEffect(fetchTopRatedSeries,[])

        return (
            <main>
            <section className = "shows-by-category">
                <h2>Popular now</h2>
                <PopularShows  popularShows={popularShows}/>
            </section>
            <section className = "shows-by-category">
                <h2>Top Rated Shows</h2>
                <TopRatedShows topRatedShows = {topRatedShows}/>
            

            </section>
            </main>
    )
}

export default HomePage;
