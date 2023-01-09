import './myShow.css'

const MyShow = ({myShows}) => {
    const myShowTiles = myShows.map((myShow,index)=>{
        return <li key={index} class="list-item">
        <p>Title: {myShow.title}</p>
        <p>Rating: {myShow.rating}</p>
        <button>We'll see</button>
        </li>
    })
    
    return (
        <ul class="my-shows-wrapper">
            {myShowTiles}
            

        </ul>
    )
}

export default MyShow;