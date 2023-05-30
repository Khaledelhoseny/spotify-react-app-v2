import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'



const Player = () => {

//player 
    // const [isPlaying,setIsPlaying] = useState(false)
    // const audioElem = useRef()
    // useEffect(()=>{
    // if(isPlaying){
    //     audioElem.current.play()
    // }else{
    //     audioElem.current.pause()

    // }
    // },[isPlaying])
//player 

    // function PlayPause(){
    //     setIsPlaying(!isPlaying) 
    // }
   
      
    return (
        <>
        {/* <audio src='https://freesound.org/data/previews/612/612092_7037-lq.mp3' ref={audioElem} /> */}
        {/* {isPlaying?
        <FontAwesomeIcon onClick={PlayPause} icon={faCirclePause} />

        : */}
        <FontAwesomeIcon   icon={faCirclePlay} />

        {/* } */}
        </>
    );
};

export default Player;