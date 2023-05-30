import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const SongSearch = ({getSearchTracks}) => {
  
  const onSearch= (word)=>{
    getSearchTracks(word)
  }

    return (
        <div className="song_search" >
          
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input onChange={(e)=> onSearch(e.target.value)} type="text" placeholder="Search..."/>
        </div>
    );
};

export default SongSearch;