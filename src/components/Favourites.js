import React from 'react';
import Sidebar from './Sidebar';
import SongSection from './SongSection';
import SongsUser from './SongsUser';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BottomBar from './BottomBar';
import FavSection from './FavSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
const Favourites = () => {

    const [favTracks , setFavTracks] = useState([])
    const getFavTracks = ()=>{
      axios.get("http://localhost:8080/api/v1/favorite?pageNumber=1&pageSize=100",
      {
          headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
      }
      ).then((response)=>{
          console.log(response)
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
       
        <div className="song_side" >
        <nav>
            <SongsUser/>
            <div className="song_search" >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Search..."/>
            </div>
        </nav>
            {favTracks.length>=1 ?
                <SongSection addToHistory={addToHistory} setFavTracks={setFavTracks} sectionTitle="Your Favorites" tracks={favTracks} />
                 :
                 <>  <h4  className='loading text-center' > <FontAwesomeIcon style={{marginBottom:"10"}} icon={faMusic} /> <br/> Songs you like will appear here ...</h4> </>
                }
            {/* <FavSection setFavTracks={setFavTracks} sectionTitle="Your Favorites" tracks={favTracks} /> */}
            
        </div>
      
    );
};

export default Favourites;