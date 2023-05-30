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
const Trend = () => {

    const [trendTracks , setTrendTracks] = useState([])
    const getTrendTracks = ()=>{
      axios.get("http://localhost:8080/api/v1/trend?pageNumber=1&pageSize=15",
      {
          headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
      }
      ).then((response)=>{
          // console.log(response)
          setTrendTracks(response.data) 
      }).catch((error)=>{
          console.log(error) ; 
      })
  
    } 
    useEffect(()=>{
      getTrendTracks()
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
            {/* <FavSection setFavTracks={setFavTracks} sectionTitle="Your Favorites" tracks={favTracks} /> */}
            <SongSection addToHistory={addToHistory}  sectionTitle="Most Trending Tracks" tracks={trendTracks} />
            
        </div>
      
    );
};

export default Trend;