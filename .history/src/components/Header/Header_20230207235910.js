import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div class="header">
        <div class="header-left">
            <Link to="/" ><img src="" alt=""  className='header'/></Link>
        </div>
    </div>
  )
}

export default Header