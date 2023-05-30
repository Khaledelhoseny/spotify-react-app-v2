import React from 'react';

import { Link } from 'react-router-dom';
import FavIcon from './FavIcon';

const FavCard = ({track ,setFavTracks }) => { 
  function randomPic(){
    return Math.floor((Math.random() * 2) + 1);
  }
 
    return (
      <>
      
        <div id='card' className="song_card" >
       {/* <Link  target="_blank" to={`https://www.youtube.com/results?search_query=${track.title}`} > */}
        <img src= {`./images/song_${randomPic()}.jpg`}   alt=""/>
        <div className="card-text" >
          <h2>{track.track.title}</h2>
          <span>{track.track.artist.name}</span>
        </div>
        {/* </Link> */}
       
        <FavIcon setFavTracks={setFavTracks}  trackId={track.track.id} />
       
        
      </div>
   
      
    </>
    );
};

export default FavCard;