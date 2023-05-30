
import { useLocation, useParams } from 'react-router-dom';
import {React ,useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import axios from 'axios';
import SongSection from './SongSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BottomBar from './BottomBar';

const SeeMore = (props) => {
console.log(useLocation().state.sectionTitle)
let sectionTitle = useLocation().state.sectionTitle
// get trending tracks
const [terdingTracks , setTrendingTracks] = useState([])
const getTrendingTracks = ()=>{
  axios.get(`http://localhost:8080/api/v1/trend?genre=${sectionTitle}&pageNumber=1&pageSize=40`,
  {
      headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
  }
  ).then((response)=>{
      // console.log(response)
      setTrendingTracks(response.data) 
  }).catch((error)=>{
      console.log(error) ; 
  })

} 
useEffect(()=>{
    getTrendingTracks()
  },[]) 


// get trending tracks

//add to history 
const addToHistory = (trackId)=>{
    axios.get(`http://localhost:8080/api/v1/track/${trackId}`,
    {
        headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
    }
    ).then((response)=>{
        console.log(response.data)
        // setHistoryTracks((prevArray)=>{
        //      return[...prevArray,response.data]
        // })
        
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
         <h3 className='see_more_title' >Your favorite genre {sectionTitle}</h3>   
        <SongSection addToHistory={addToHistory} tracks={terdingTracks} /> 

        </div>
      
    );
};

export default SeeMore;