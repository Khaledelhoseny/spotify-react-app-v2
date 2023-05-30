import React from 'react';
import FavIcon from './FavIcon';
import Player from './Player';


const SongCard = ({ handleClick,track,setFavTracks}) => {

  function randomPic(){
    return Math.floor((Math.random() * 5) + 1);
  }

  const click = (tackId)=>{
    randomPic()
    document.getElementById("track_title").innerHTML=track.track.title ;
    document.getElementById("artist_name").innerHTML=track.track.artist.name ;
    document.getElementById("bottomBar_img").src = `./images/song_${randomPic()}.png` ;
    document.getElementById("bottomBar_link").style.display="block";
    handleClick(tackId)
    
    
  }
 
    return (
      <>
      
        <div className="song_card" >
       {/* <Link onClick={()=>click(track.track.id)} target="_blank" to={`https://www.youtube.com/results?search_query=${track.track.title}`} > */}
        <img id='pic' src= {`./images/song_${randomPic()}.png`}   alt=""/>
        <div className="card-text" >
          <h2>{track.track.title}</h2>
          <span>{track.track.artist.name}</span>
        </div>
        {/* </Link> */}
       {/* <Link  target="_blank" to={`https://www.youtube.com/results?search_query=${track.track.title}`} > */}
       <div onClick={()=>click(track.track.id)} className='play_icon' >
          <Player />
        </div>
        {/* </Link> */}
      
       <FavIcon setFavTracks={setFavTracks}  trackId = {track.track.id} />
      </div>
      
   
      
    </>
    );
};

export default SongCard;