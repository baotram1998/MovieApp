// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation,Pagination } from 'swiper/modules';
import './Swiper.css'
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

const SwiperGallery = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={35} //Khoảng cách giữa các slide
      slidesPerView={4} //số lượng in trên 1 view
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="image-swiper"
    >
      <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box">

        <img src="https://movie-site-delta.vercel.app/img/popular-movie-1.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">SPIDER-MAN: NO WAY HOME</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
      </SwiperSlide>
      <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box">
        <img src="https://movie-site-delta.vercel.app/img/popular-movie-2.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">JUNGLE CRUISE</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
      <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box">
        <img src="https://movie-site-delta.vercel.app/img/popular-movie-3.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">LOKI</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
      <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box">
        <img src="https://movie-site-delta.vercel.app/img/popular-movie-4.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">SQUID GAME</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
        <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box">
          <img src="https://movie-site-delta.vercel.app/img/popular-movie-5.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">THE FALCON AND THE WINTER SOLDIER</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide >
        <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box">
          <img src="https://movie-site-delta.vercel.app/img/popular-movie-6.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">HAWKEYE</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
        <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box">
          <img src="https://movie-site-delta.vercel.app/img/popular-movie-7.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">AGENTS of S.H.I.E.L.D.</h1>
                            <span className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide >
        <SwiperSlide className="popular-content swiper swiper-wrapper swiper-slide movie-box">
          <img src="https://movie-site-delta.vercel.app/img/popular-movie-8.jpg"
        alt="" className='movie-box-img'/>
        <div className="box-text">
                            <h1 className="movie-tittle">THE FLASH</h1>
                            <span  className="movie-type">action</span>
                            <a href="#" className="watch-btn play-btn ">
                                <i className='bx bx-right-arrow'></i>
                            </a>
                        </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default SwiperGallery;