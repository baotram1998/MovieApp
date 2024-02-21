
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Movie from './Page/Movie';
import Favorite from './Page/Favorite';
import DefaultLayout from './layouts/defaultLayout';
import TrendingPage from './Page/Trending';
import HomePage from './Page/Home';
import ExplorePage from './Page/Explore';
import DefaultTrending from './Page/DefaultTrending';
//import { FaHome } from "react-icons/fa";


function App() {
   return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="trending" element={<TrendingPage/>}/>
      <Route path="explore" element={<ExplorePage/>}/>
      <Route path="movie" element={<Movie/>}/>
      <Route path="favorite" element={<Favorite/>}/>
      <Route path=":id" element={<DefaultTrending/>} />
      </Route>
    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
