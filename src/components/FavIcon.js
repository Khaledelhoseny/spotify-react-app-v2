import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
const FavIcon = ({trackId ,setFavTracks}) => {
    const [fav, setFav] = React.useState({
        isFavorite: false
    })
  

  const [favTracks , seteFavTracks] = useState([])
  const getFavTracks = ()=>{
    axios.get("http://localhost:8080/api/v1/favorite?pageNumber=1&pageSize=100",
    {
        headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
    }
    ).then((response)=>{
        // console.log(response)
        seteFavTracks(response.data) 
        setFavTracks(response.data)
        
    }).catch((error)=>{
        console.log(error) ; 
    })

  } 
  useEffect(()=>{
    getFavTracks()
},[])  
const found = favTracks.some(el => el.track.id === trackId);

let starIcon 

    function removeFromFav(){
        axios.delete(`http://localhost:8080/api/v1/favorite?trackId=${trackId}` ,
                {
                  headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
                } 
                ).then((response)=>{
                    console.log(response)
                    // seteFavTracks(favTracks.filter((i)=>(i.trackId !== trackId)))
                    // console.log(favTracks)
                    getFavTracks()

                }).catch((error)=>{
                    console.log(error) ; 
                })
    }
    function addToFav(){
        axios.post("http://localhost:8080/api/v1/favorite",{
                        trackId:trackId
                    } ,
                    {
                      headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
                    } 
                    ).then((response)=>{
                        console.log(response)
                        // seteFavTracks((prevArray)=>{
                        //     return[...prevArray,response.data]
                        // })
                        getFavTracks()

                    }).catch((error)=>{
                        console.log(error) ; 
                    })
    }

    return (
        <div className="fav-icon" >
            {found? 
            <img 
            alt=''
            src={`./images/${starIcon="filled-heart.png"}`} 
            className="card--favorite"
            onClick={removeFromFav}
            />
            :
            <img 
            alt=''
            src={`./images/${starIcon="empty-heart.png"}`} 
            className="card--favorite"
            onClick={addToFav}
            />
            }
        </div>
    );
};

export default FavIcon;