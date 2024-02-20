import { Link } from "react-router-dom";
import Icon from "./icon";
import { FaHome, FaFire, FaCompass, FaVideo, FaHeart } from "react-icons/fa";

function Header( ) {
  return (
    <header>
        <div className="nav container">
        <div className="logo">MOVIE<span>VENNIE</span></div>
      <div className="search-box">
        <input type="search-box" name="" id="search-input" placeholder="Search Movie"/>
      </div>
      <a href="#" className="user">
      <img src="https://movie-site-delta.vercel.app/img/user.png" alt="" className="user-img"/>
      </a>
        </div>
      
    <div className="navbar">
      <nav> 
        <ul>
          <li className="nav-link">
          <Icon icon={<FaHome/>}/> 
            <Link to={`/`}>Home</Link> 
          </li><br/>
          <li className="nav-link">
          <Icon icon={<FaFire/>}/>
            <Link to={`/trending`}>Trending</Link>
          </li><br/>
          <li className="nav-link">
          <Icon icon={<FaCompass/>}/> 
            <Link to={`/Explore`}>Explore</Link>
          </li><br/>
          <li className="nav-link">
          <Icon icon={<FaVideo/>}/> 
            <Link to={`/movie`}>Movies</Link>
          </li><br/>
          <li className="nav-link">
          <Icon icon={<FaHeart/>}/>
            <Link to={`/favorite`}>Favorite</Link>
          </li>
        </ul>
      </nav>
  </div> 
      
    </header>
  );
}

export default Header;