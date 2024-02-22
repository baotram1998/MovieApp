import { Helmet } from "react-helmet";
import { FiPlay } from "react-icons/fi"; 
//import Skeleton from "react-loading-skeleton";
import MovieS from "../Components/Movie";
//import MovieSwiper from "../Components/MovieSwiper";



const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="home container w-[1060px]" id="home">
                <img src="https://movie-site-delta.vercel.app/img/home-background.png" alt="" className="home-img"/>
                <div className="home-text">
            <h1 className="home-tittle">Hitman's Wife's <br/>Bodyguard</h1>
            <p>Releasing 23 july</p>
            <a href="#" className="watch-btn">
                <div className="bx">
                    <FiPlay className=""/>
                </div>
                <span>Watch the trailler</span>
            </a>
             </div>
            </section>

            <section className="popular container" id="popular">
                <div className="heading">
                    <h2 className="heading-title">Popular Movies</h2>
                </div>
                <div className="popular-content swiper">
                    <MovieS url={`/trending`} />
                </div>
                
            </section>

            <section className="movies-container container" id="movies">
                <div className="heading">
                    <h2 className="heading-title">Movies and Shows</h2>
                </div>
                <div className="movies-content">
                    <div className="popular-content swiper">
                        <MovieS url={`/explore`} />
                    </div>
                </div>
            </section>
       
                <div className="movies-content mt-[30px]">
                    <div className="popular-content swiper">
                        <MovieS url={`/top_rated`} />
                    </div>
                </div>
            
              
        </>
    );
};


export default HomePage;