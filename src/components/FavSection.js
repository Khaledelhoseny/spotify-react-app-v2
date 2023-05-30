import React from 'react';
import FavCard from './FavCard';

const FavSection = ({tracks , sectionTitle,setFavTracks}) => {
    return (
        <div className='song_section' >
        
            <div>
                <h3>{sectionTitle}</h3>  
            </div>
                    {tracks.length>=1 ? tracks.map((track)=>(  
                            <FavCard setFavTracks={setFavTracks} key={track.id} track={track} />
                    )) : <></>}   
       
        </div> 
         
    );
};

export default FavSection;