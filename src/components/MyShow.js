import './myShow.css'
import { useState } from 'react'

const MyShow = ({myShows, changeRating}) => {

    
    

    const myShowTiles = myShows.map((myShow,index)=>{
        const handleClick=()=>{
            console.log(myShow.rating)
        }

        return <li key={index} className="list-item">
        <p>Title: {myShow.title}</p>
        <p>Rating: {myShow.rating}</p>
        <button onClick={handleClick}>Change rating</button>
        </li>
    })
    
    return (
        <ul className="my-shows-wrapper">
            {myShowTiles}
            

        </ul>
    )
}

export default MyShow;