import MyShow from "../components/MyShow";

const ToWatch = ()=>{
    const myShows = [
        {
            id:1,
            title: "Friends",
            rating: 10
        },
        {
            id:2,
            title: "Mindy Project",
            rating:8
        },
        {
            id:3,
            title: "Frasier",
            rating: 9
        },

    ]

    return (
        <>
          
            <MyShow myShows={myShows}></MyShow>
            

         
    
          
        </>
        
      );
}

export default ToWatch;