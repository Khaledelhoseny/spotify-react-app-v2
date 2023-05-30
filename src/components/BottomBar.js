import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const BottomBar = () => {
    function randomPic(){
        return Math.floor((Math.random() * 2) + 1);
      }
      
     function navigateToYouTube(){
      let x = document.getElementById("track_title").innerHTML
      window.open(`https://www.youtube.com/results?search_query=${x}`, '_blank');
     }
    return (
        <div class="music_play" > 
        <div class="left-side" >
          <img id='bottomBar_img' />
          <h5 id='track_title' class="title" >
          </h5>
          <div id='artist_name' class="subtitle" ></div>
        </div>
        <div id='bottomBar_link' style={{display:"none"}} onClick={navigateToYouTube} className='bottomBar_link' >
        <FontAwesomeIcon style={{marginRight:"10"}} icon={faLink} />
          Go to link
        </div>
        {/* <div class="middle-side text-center" >
          <span><i class="fa-solid fa-backward-step"></i></span>
          <span><i class="fa-regular fa-circle-pause"></i></span>
          <span><i class="fa-solid fa-forward-step"></i></span>
          <input class="d-block" type="range"/>
        </div> */}
        {/* <div class="right-side" >
          <input type="range"/>
        </div> */}
      </div>
    );
};

export default BottomBar;