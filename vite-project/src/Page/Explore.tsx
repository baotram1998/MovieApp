//import React from 'react'

import ExploreSwiper from "../Swiper/ExploseSwiper"
import { Helmet } from "react-helmet";

const Explore = () => {
    return (
        <>
        <Helmet>
      <meta charSet="uft-8" />
      <title>Explore</title>
      <link rel="canomical" href="http://mysite.com/example" />
    </Helmet>
        <div className="movies-container container" id="movies">
        <div className="heading">
            <h2 className="heading-title">Movies and Shows</h2>
        </div>
       
         <ExploreSwiper/>
        </div>
       
        </>    
      )
    
}

export default Explore