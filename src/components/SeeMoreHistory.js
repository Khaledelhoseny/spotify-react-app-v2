import {React ,useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import axios from 'axios';
import SongSection from './SongSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BottomBar from './BottomBar';

const SeeMoreHistory = () => {
const [historyTracks , setHistoryTracks] = useState([])
const getHistoryTracks = ()=>{
  
        axios.get(`http://localhost:8080/api/v1/history?pageNumber=1&pageSize=100`,
        {
            headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
        }
        ).then((response)=>{
            // console.log(response)
            setHistoryTracks( response.data) 
        }).catch((error)=>{
            console.log(error) ; 
        })
    
 
}

useEffect(()=>{
    getHistoryTracks()
},[])  
    return (
                
       
        <div className="song_side" >
        <nav>
            <SongsUser/>
        <div className="song_search" >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search..."/>
        </div>

        </nav>
            <h3 className='see_more_title' >History</h3>
        <SongSection tracks={historyTracks} /> 

        </div>
       
    );
};

export default SeeMoreHistory;