import React from 'react';
import SongCard from './SongCard';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
const  SongSection = ({ addToHistory,tracks,sectionTitle,setFavTracks}) => {
    
    const handleClick=(trackId)=>{
        if(sectionTitle!=="History"){
                addToHistory(trackId)
        }
       
      }
      const navigate = useNavigate()
     function goToSeeMore(){
        if(sectionTitle==="History"){
         navigate("/SeeMoreHistory")

        }else{
         navigate("/SeeMore",{state:{sectionTitle:sectionTitle}})
                
        }
     }
    return (
        <div className='song_section' >

        
        <div>
                {
                sectionTitle==="Pop"||sectionTitle==="Rock"||sectionTitle==="HipHop"||sectionTitle==="Jazz"||sectionTitle==="Country"||sectionTitle==="Blues"||sectionTitle==="Reggae"?  
                <h3>Your favorite genre {sectionTitle}</h3>
                :
                <h3>{sectionTitle}</h3>
                }

                {
                    (tracks.length>=6&&sectionTitle&&sectionTitle!=="Your Favorites"&&sectionTitle!=="Most Trending Tracks") ?

                //        <Link to={`/SeeMore${sectionTitle}`} >see more</Link>
                       <div style={{display:"inline"}} onClick={goToSeeMore} >
                       <Link  onClick={goToSeeMore} >seemore</Link> 
                       </div>
                       :
                       <></>
                }
                
                
        </div>
                {tracks.length>=1 ? tracks.map((track,index)=>(  
                        <SongCard  setFavTracks={setFavTracks} handleClick={handleClick} key={index} track={track} />
                )) : <h4 className='loading' >There is no tracks ...</h4>}   

        </div>
    );
};

export default SongSection;