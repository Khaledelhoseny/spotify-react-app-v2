import { NavLink } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'

// import { NavLink } from 'react-router-dom';
// import logo from '../images/beat.jpeg'
function handleRemove(){
    localStorage.removeItem("accessToken")
    document.getElementById("track_title").innerHTML='' ;
    document.getElementById("artist_name").innerHTML='' ;
    document.getElementById("bottomBar_img").removeAttribute('src') ;
    document.getElementById("bottomBar_link").style.display="none";
    localStorage.removeItem("userInformation")

  }
const Sidebar = () => {
    return (
        <div className="menu_side" >
              <NavLink  to='/home' > <img src= "./images/beat.png"  alt=""/> </NavLink>
            <div className="menu_item" >      
               
                <NavLink to='/home' >  <span><FontAwesomeIcon icon={faHouse} /></span> Home</NavLink>
            </div>
            <div className="menu_item" > 
                
                <NavLink to='/favourits' > <span><FontAwesomeIcon icon={faHeart} /></span> Favourites</NavLink>
            </div> 
            <div className="menu_item" > 
            
                <NavLink to='/trend' > <span><FontAwesomeIcon icon={faFire} /></span> Trend</NavLink>
            </div> 
            <div className="menu_item last_item" >  
            <NavLink onClick={handleRemove} to='/' >Log Out</NavLink>

            </div>
        </div>
    );
};

export default Sidebar;

