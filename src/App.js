import "./App.css"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import Show from "./pages/Show";
import Search from "./pages/Search";
// Components
import Navbar from "./components/Navbar";

const App = () =>{
  return (
    <div>
      <Navbar/>
      
      <Router>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/show" element = {<Show/>}/>
          <Route path = "/search" element = {<Search/>}/>

          
        </Routes>

      </Router>
    </div>
    
  );
}

export default App;
