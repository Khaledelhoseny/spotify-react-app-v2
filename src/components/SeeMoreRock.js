import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import { useState,useEffect } from 'react';
import axios from 'axios';
import SongSection from './SongSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BottomBar from './BottomBar';

const SeeMoreRock = () => {

    // get rock tracks
const [rockTracks , setRockTracks] = useState([])
const getRockTracks = ()=>{
  axios.get("http://localhost:8080/api/v1/trend?genre=Rock&pageNumber=1&pageSize=20",
  {
      headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
  }
  ).then((response)=>{
      setRockTracks(response.data) 
  }).catch((error)=>{
      console.log(error) ; 

  })

} 
useEffect(()=>{
  getRockTracks()
  },[])  

// get rock tracks 
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
                
        <div className='main_div' >
        <header >
        <Sidebar/>
        <div className="song_side" >
        <nav>
            <SongsUser/>
            <div className="song_search" >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search..."/>
        </div>
        </nav>
            
        Rock
        <SongSection addToHistory={addToHistory} tracks={rockTracks} /> 
            
        </div>
        <BottomBar/>
        </header>
        </div>
    );
};

export default SeeMoreRock;