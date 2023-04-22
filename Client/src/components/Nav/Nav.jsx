import React from "react";
import SearchBar from "../Search-Bar/SearchBar.jsx"
import Style from './Nav.module.css'
import Logo from '../../images/Logo-Rick&Morty.png'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ROUTE from "../../helpers/routes.helpers.js";


const Nav = ({ onSearch, randomSearch, logout }) => {
  const location = useLocation()
  return(
    <div className={Style.navContainer}>
      <Link to='/'>
        <img 
          src={Logo} alt='logo-rick&morty'
          className={Style.logo}/>
      </Link>
      {location.pathname !== ROUTE.ABOUT && 
        <Link to={ROUTE.FAVORITES}>
          <button className={Style.button}>❤️ Favoritos</button>
        </Link>}
        
      {location.pathname === '/' && <SearchBar 
        onSearch={onSearch} 
        randomSearch={randomSearch}/>}
      
      <ul className={Style.menu}>
        <NavLink to='/' className={({isActive})=> isActive ? Style.active : Style.disable}>
          <li>
            <span>HOME</span>
          </li>
        </NavLink>
        <NavLink to={ROUTE.ABOUT} className={({isActive})=> isActive ? Style.active : Style.disable}>
          <li>
            <span>ABOUT</span>
          </li>
        </NavLink>
       
        <li>
          <span className={Style.logout} onClick={logout}>Log Out</span>
        </li>
   
      </ul>
    </div>
    
  );
};

export default Nav;