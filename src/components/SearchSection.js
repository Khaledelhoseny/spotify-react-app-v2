import React from 'react';
import SearchCard from './SearchCard';

const SearchSection = ({addToHistory,tracks}) => {
    const handleClick=(trackId)=>{
        addToHistory(trackId)
      }
    return (
        <>

        <div className="song_section" >
            <div>
                <h3>Your search results </h3>
            </div>
                {tracks.length>=1 ? tracks.map((track,index)=>(  
                        <SearchCard handleClick={handleClick} key={index} track={track} />
                )) : <h2>Loading...</h2>}   


        </div>
       

    </>
    );
};

export default SearchSection;