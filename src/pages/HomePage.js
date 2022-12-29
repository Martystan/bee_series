import {useState, useEffect} from "react"
import './homepage.css'


// components
import PopularShows from "../components/PopularShows";
import NetflixShows from "../components/NetflixShows";
import Show from "./Show";

const HomePage = () => {

    const[popularShows, setPopularShows] = useState([]);
    const[netflixShows, setNetflixShows] = useState([]);
    const[selectedShow, setSelectedShow] = useState(null)

    const fetchPopularSeries = ()=>{
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=e8d8f61f887dbb73c841557fc8ce3e6b&language=en-US&page=1")
        .then(response =>response.json())
        .then(data => setPopularShows(data.results))
        }

    const fetchNetflixSeries = ()=>{
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=e8d8f61f887dbb73c841557fc8ce3e6b&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_providers=8&watch_region=GB&with_watch_monetization_types=flatrate&with_status=0&with_type=0")
        .then(response => response.json())
        .then(data =>setNetflixShows(data.results))
    }

    useEffect(fetchPopularSeries,[])
    useEffect(fetchNetflixSeries,[])

    
    

    const onShowClick = (show) => {
        
        setSelectedShow(show)
        
    }

        return (
            <main>
            <section className="shows-by-category">
                <h2 className="category-heading">Popular now</h2>
                <PopularShows  popularShows={popularShows} onShowClick={onShowClick}/>
                {selectedShow ? <Show selectedShow= {selectedShow}/>: null}
            </section>
            <section className = "shows-by-category">
                <h2 className="category-heading">Netflix Shows</h2>
                <NetflixShows netflixShows = {netflixShows} onShowClick={onShowClick}/>
                {selectedShow ? <Show selectedShow= {selectedShow}/>: null}

            </section>
            </main>
    )
}

export default HomePage;
