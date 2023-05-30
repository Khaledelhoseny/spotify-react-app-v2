import React from 'react';
import SongCard from './SongCard';
import { Link } from 'react-router-dom';
import FavIcon from './FavIcon';

const HistorySection = ({ addToHistory,tracks}) => {
    
    function randomPic(){
        return Math.floor((Math.random() * 2) + 1);
      }
    
    const handleClick=(trackId)=>{
        addToHistory(trackId)
      }
    return (
        <>

        {/* <div className="songs-title" > */}

                {tracks.length>=1 ? tracks.map((track)=>(  
                              <div className="song_card" >
                              <Link  onClick={()=>{handleClick(track.track.id)}} target="_blank" to={`https://www.youtube.com/results?search_query=${track.track.title}`} >
                               <img id='pic' src= {`./images/song_${randomPic()}.jpg`}   alt=""/>
                               <div className="card-text" >
                                 <h2>{track.track.title}</h2>
                                 <span>{track.track.artist.name}</span>
                               </div>
                               </Link>
                              <FavIcon trackId={track.track.id} />
                               
                             </div>
                )) : <h2>Loading...</h2>}   


        {/* </div> */}
       

    </>
    );
};

export default HistorySection;