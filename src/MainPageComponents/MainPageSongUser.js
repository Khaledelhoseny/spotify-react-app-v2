import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const MainPageComponents = () => {
    const navigate = useNavigate();
    function navigateRegister (){
        navigate('/register')
    }
    function navigateLogin (){
        navigate('/login')
    }
return (
<div className="song_user" >
  <button onClick={navigateRegister} type="button" class=" btn btn-light">Sign Up</button>
<button  onClick={navigateLogin} type="button" class=" btn btn-light">Login</button>


</div>
);
};

export default MainPageComponents;