import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import BottomBar from './BottomBar';
import ProfileCard from './ProfileCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
const Profile = () => {
// get random pic
    function randomPic(){
        return Math.floor((Math.random() * 2) + 1);
    }
// get random pic
// get profile info 
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
// get profile info
const [favTracks , setFavTracks] = useState([])
    const getFavTracks = ()=>{
      axios.get("http://localhost:8080/api/v1/favorite?pageNumber=1&pageSize=20",
      {
          headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
      }
      ).then((response)=>{
          // console.log(response)
          setFavTracks(response.data) 
      }).catch((error)=>{
          console.log(error) ; 
      })
  
    } 
    useEffect(()=>{
      getFavTracks()
      },[])  
  
      //add to history 
    const addToHistory = (trackId)=>{
        axios.get(`http://localhost:8080/api/v1/track/${trackId}`,
        {
            headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
        }
        ).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error) ; 
        })

    }

    //add to history         
    return (
      
                <div className="song_side " >
                    
                    <div className="artist_details background_img" >
                        <nav>
                            <SongsUser/>
                        </nav>
                        <img className='user_left_img' src="../images/user.png" alt=""/>
                        <h5 className="artist_name">
                            <p>{userInfo.username}</p>
                        </h5>
                    </div>
                    { favTracks.length>=1 ?
                    <h2 style={{color:"white",marginLeft: 40,marginTop: 20 , fontFamily: 'Poppins'}} >Your Favorite Songs</h2>
                        :
                        <></>
                    }

                    {favTracks.length>=1 ? favTracks.map((track,index)=>(  
                        <>
                        <ProfileCard  setFavTracks={setFavTracks} addToHistory={addToHistory} key={index} track={track} />
                        </>
                )) :<>  <h4  className='loading text-center' > <FontAwesomeIcon style={{marginBottom:"10"}} icon={faMusic} /> <br/> Songs you like will appear here ...</h4> </>
                
                }   
 
                
      </div>
    
    );
};

export default Profile;