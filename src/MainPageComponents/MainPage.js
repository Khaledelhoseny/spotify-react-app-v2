import React from 'react';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {


if(window.location.reload){
    console.log("reloaded")
    // getPopTracks()
    // getRockTracks()

}
const navigate = useNavigate();

function navigateRegister (){
    navigate('/register')
}
function navigateLogin (){
    navigate('/login')
}
    return (
      <div>
            
        <div className='main_page' >
                <div className='welcome_container ' >
                    <img width="200px" src='./images/beat.png' />
                    <h2>Welcome to beat</h2>
                    <p href="">Please login to continue</p>
                    <button  onClick={navigateLogin} className='welcome_login_button' >Log in to BEAT</button>
                    <p href="">Don't have an account ?</p>
                    <button onClick={navigateRegister} className='welcome_signup_button' >Sign up to BEAT</button>

                </div>
                <div className='about_container text-center' >
                    <h1> About Us </h1>
                    <p>
                            A music recommendation system is a software application
                    that suggests music tracks to users based on their past listening behavior
        Such systems have become increasingly popular due to the vast amount of music available online and the need to
        help users discover new music they might enjoy. This project proposes a music rcommendation system that uses machine learning
                        techniques to predict music tracks that a user is likely to enjoy.

                    </p>
                </div>
        </div>
            
        </div>

        
    );
};

export default MainPage;