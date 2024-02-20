//import React from 'react'

import Explore from "./Explore";
import { Trending } from "./Trending";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
      <meta charSet="uft-8" />
      <title>Home</title>
      <link rel="canomical" href="http://mysite.com/example" />
    </Helmet>
    < div className="container m-auto">
      <section className="home container" id="home">
      <img src="https://movie-site-delta.vercel.app/img/home-background.png" alt="" className="home-img"/>
       
        <div className="home-text">
            <h1 className="home-tittle">Hitman's Wife's <br/>Bodyguard</h1>
            <p>Releasing 23 july</p>
            <a href="#" className="watch-btn">
                <i className='bx bx-right-arrow'></i>
                <span>Watch the trailler</span>
            </a>
        </div>
    </section> <br/>
    <br/>
    <Trending/>
    <br/>
    <Explore/>
    </div>
    </>
    
    
   
  )
}

export default Home;