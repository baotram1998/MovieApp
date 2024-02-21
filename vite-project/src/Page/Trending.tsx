import { Helmet } from "react-helmet";
//import MovieSwiper from "../Components/MovieSwiper"
import MovieS from "../Components/Movie";
//import SwiperGallery from "../Swiper";




const TrendingPage = () => {
    return(
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Trending</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <section className="popular container popular-route" id="popular">
                <div className="heading">
                    <h2 className="heading-title">Popular Movies</h2>
                </div>
                <div className="popular-content swiper flex gap-5 flex-wrap justify-between">
                    <MovieS url={`/trending`} />
                </div>
            </section>
    
        </>
    )

};

export default TrendingPage;
