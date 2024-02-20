// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation,Pagination } from 'swiper/modules';
import './Swiper.css';
/* 
- Navigation là đấu mũi tên next qua slide 
- Pagination là dấu chấm tròn giữa slide 
*/

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ExploreSwiper = () => {
 
  return (
    <Swiper 
      modules={[Navigation, Pagination]}
      spaceBetween={40} 
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="image-swiper"
    >
    
      <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box" >
      <img src="https://movie-site-delta.vercel.app/img/movie-1.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">JUMANJI WELCOME TO THE JUNGLE</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
      </SwiperSlide>
      <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box" >
       <img src="https://movie-site-delta.vercel.app/img/movie-4.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">ENTERNALS</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
       </SwiperSlide>
      <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box" >
      <img src="https://movie-site-delta.vercel.app/img/movie-5.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">007 SPECTRE</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
      <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box" >
        <img src="https://movie-site-delta.vercel.app/img/movie-6.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">MONEY HEIST</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
        <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box" >
          <img src="https://movie-site-delta.vercel.app/img/movie-7.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">THE WOLVERINE</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
        <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box" >
          <img src="https://movie-site-delta.vercel.app/img/movie-8.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">JOHNNY ENGLISH 3.0</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
        <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box" >
          <img src="https://movie-site-delta.vercel.app/img/movie-2.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">THE HITMAN'S BODYGUARD</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
        <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box" >
          <img src="https://movie-site-delta.vercel.app/img/movie-3.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">SHANG-CHI AND THE LEGEND OF THE TEN RINGS</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
     
      
    </Swiper>
  )
}

export default ExploreSwiper;