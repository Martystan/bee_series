import "./App.css"
import { Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import Show from "./pages/Show";
import Search from "./pages/Search";
// Components
import Navbar from "./components/Navbar";
import ToWatch from "./pages/ToWatch";

const App = () =>{
  return (
    <div>
      <Navbar/>
      
      
        <Routes>
          <Route path = "/" element = {<HomePage/>} />
          <Route path = "/show" element = {<Show/>}/>
          <Route path = "/search" element = {<Search/>}/>
          <Route path="/to-watch" element= {<ToWatch/>}/>

          
        </Routes>

      
    </div>
    
  );
}

export default App;
