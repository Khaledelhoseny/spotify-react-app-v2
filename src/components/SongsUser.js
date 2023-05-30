import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  

const SongsUser = () => {
    const [userInfo , setUserInfo] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/user/profile",
      {
          headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
      }
      
      ).then((response)=>{
          // console.log(response.data) 
          setUserInfo(response.data) ;
      }).catch((error)=>{
          console.log(error) ; 
      })
  
        },[])

        function handleRemove(){
          localStorage.removeItem("accessToken")
          document.getElementById("track_title").innerHTML='' ;
          document.getElementById("artist_name").innerHTML='' ;
          document.getElementById("bottomBar_img").removeAttribute('src') ;
          document.getElementById("bottomBar_link").style.display="none";
          localStorage.removeItem("userInformation")
        }
    return (
        <div className="song_user" >
        <span>{userInfo.username}</span>
        <div className="dropdown">
        <div className="dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false"  >
          <img  className='user_right_img' src="./images/user.png" alt=""/>
        </div>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
          <li><Link className="dropdown-item" to="/resetPassword">reset password</Link></li>
          <li><Link onClick={handleRemove} className="dropdown-item" to="/">log out</Link></li>
        </ul>
      </div>
      </div>
    );
};

export default SongsUser;