import React from 'react';
import RecommendCard from './RecommendCard';
import { Link } from 'react-router-dom';
const RecommendSection = ({tracks,sectionTitle}) => {
    return (
        <div className='song_section' >
              <div>
                <h3>{sectionTitle}</h3>
                
                </div>
            <div className="song_section" >

                {tracks.length>=1 ? tracks.map((track,index)=>(  
                        <RecommendCard  key={index} track={track} />
                )) : <h2>Loading...</h2>}   


            </div>
        </div>
    );
};

export default RecommendSection;