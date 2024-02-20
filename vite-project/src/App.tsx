
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Page/Home';
import { Trending } from './Page/Trending';
import Explore from './Page/Explore';
import Movie from './Page/Movie';
import Favorite from './Page/Favorite';
import DefaultLayout from './layouts/defaultLayout';
//import { FaHome } from "react-icons/fa";


function App() {
   return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
      <Route index element={<Home/>} />
      <Route path="trending" element={<Trending/>}/>
      <Route path="explore" element={<Explore/>}/>
      <Route path="movie" element={<Movie/>}/>
      <Route path="favorite" element={<Favorite/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
