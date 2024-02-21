//import React from 'react'

import { Helmet } from "react-helmet";
import MovieSwiper from "../Components/MovieSwiper";

const ExplorePage = () => {
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
        </div>
        <div className="popular-content swiper flex gap-5 flex-wrap justify-between">
                        <MovieSwiper url={`/explore`} />
                    </div>  
        <div className="popular-content swiper flex gap-5 flex-wrap justify-between">
                        <MovieSwiper url={`/top_rated`} />
                    </div>  
                    
  
        </>    
      )
    
}

export default ExplorePage