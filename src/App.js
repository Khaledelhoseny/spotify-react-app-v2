import React from "react";
import Home from "./components/Home";
import {Router , Route , Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ResetPassword from "./components/ResetPassword";
import MainPage from "./MainPageComponents/MainPage";
import PrivateRoutes from "./components/PrivateRoutes";
import SeeMoreHistory from "./components/SeeMoreHistory";
import SeeMorePop from "./components/SeeMorePop";
import SeeMoreRock from "./components/SeeMoreRock";
import SeeMoreHipHop from "./components/SeeMoreHipHop";
import Trend from "./components/Trend";
import SeeMore from "./components/SeeMore";
import { BrowserRouter } from 'react-router-dom';
import BottomBar from "./components/BottomBar";
import Sidebar from "./components/Sidebar";
class App extends React.Component{
    render(){
        return(
         <>
            <div className='main_div' >
            <header >

            <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route element={<PrivateRoutes/>} >
                    <Route  path="/home" element={<Home/>} />
                    <Route  path="/favourits" element={<Favourites/>} />
                    <Route  path="/trend" element={<Trend/>} />
                    <Route  path="/profile" element={<Profile/>} /> 
                    <Route  path="/resetPassword" element={<ResetPassword/>} /> 
                    <Route  exact  path="/SeeMore" element={<SeeMore/>} /> 
                    <Route  path="/seeMoreHistory" element={<SeeMoreHistory/>} />  
                </Route>
            </Routes>
            <BottomBar/>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route  path="/login" element={<Login/>} /> 
                <Route  path="/register" element={<Register/>} /> 
            </Routes>
            </BrowserRouter>
            </header>
        </div>
      

        </>

        )
    }
} 
export default App 

