import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"

const Header = () => {
    const url ='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'
  return (
    <div class="header">
        <div class="header-left">
            <Link to="/" ><img src={url} alt=""  className='header__icon'/></Link>
            <Link to ="/movies/popular" style={{}}>Popular</Link>
            <Link to ="/movies/top_rated" style={{}}>Top Rated</Link>
            <Link to ="/movies/upcoming" style={{}}>Upcoming</Link>
            
        </div>
    </div>
  )
}

export default Header