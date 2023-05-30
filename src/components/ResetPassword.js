import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import BottomBar from './BottomBar';
import ResetPasswordVald from './ResetPasswordVald' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';


import axios from 'axios';
const USER_REGEX = /^[A-z][A-z0-9-_]{3,31}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,32}$/;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const REGISTER_URL = '/register';

const ResetPassword = () => {

    const navigate =  useNavigate()
    // toggle password
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword =()=>{
       if(passwordType==="password")
       {
        setPasswordType("text")
        return;
       }
       setPasswordType("password") 
     }
   // toggle password
   // toggle confirm password
   const [confirmPasswordType, setConfirmPasswordType] = useState("password");
   const toggleConfirmPassword =()=>{
       if(confirmPasswordType==="password")
       {
           setConfirmPasswordType("text")
       return;
       }
       setConfirmPasswordType("password") 
   }
   // toggle confirm password

   const firstRef = useRef();
   const lastRef = useRef();
   const emailRef = useRef() ;
   const userRef = useRef();
   const errRef = useRef();
   const favRef = useRef();
   const dateRef = useRef();
   const genderRef = useRef();


   const [first, setFirst] = useState('');
   const [validFirst, setValidFirst] = useState(false);
   const [firstFocus, setFirstFocus] = useState(false);

   
   const [last, setLast] = useState('');
   const [validLast, setValidLast] = useState(false);
   const [lastFocus, setLastFocus] = useState(false);

   const [email, setEmail] = useState('');
   const [validEmail, setValidEmail] = useState(false);
   const [emailFocus, setEmailFocus] = useState(false);

   const [user, setUser] = useState('');
   const [validName, setValidName] = useState(false);
   const [userFocus, setUserFocus] = useState(false);

   const [current, setCurrent] = useState('');



   const [pwd, setPwd] = useState('');
   const [validPwd, setValidPwd] = useState(false);
   const [pwdFocus, setPwdFocus] = useState(false);

   const [matchPwd, setMatchPwd] = useState('');
   const [validMatch, setValidMatch] = useState(false);
   const [matchFocus, setMatchFocus] = useState(false);

   const [fav , setFav] = useState('');
   const [validFav, setValidFav] = useState(false);
   const [favFocus, setFavFocus] = useState(false);

   const [date , setDate] = useState('');
   const [validDate, setValidDate] = useState(false);
   const [dateFocus, setDateFocus] = useState(false);

   const [gender , setGender] = useState('');
   const [validGender, setValidGender] = useState(false);
   const [genderFocus, setGenderFocus] = useState(false);

   const [errMsg, setErrMsg] = useState('');
   const [success, setSuccess] = useState(false);

   // useEffect(() => {
   //     userRef.current.focus();
   // }, [])

   useEffect(() => {
       setValidFirst(USER_REGEX.test(first));
   }, [first])

   useEffect(() => {
       setValidLast(USER_REGEX.test(last));
   }, [last])

   useEffect(() => {
       setValidEmail(EMAIL_REGEX.test(email));
   }, [email])
   useEffect(() => {
       setValidName(USER_REGEX.test(user));
   }, [user])

   useEffect(() => {
       setValidPwd(PWD_REGEX.test(pwd));
       setValidMatch(pwd === matchPwd);
   }, [pwd, matchPwd])

   useEffect(() => {
       setValidFav(fav!="");
   }, [fav])

   useEffect(() => {
       setValidDate(date!="");
   }, [date])


   useEffect(() => {
       setValidGender(gender!="");
   }, [gender])


   useEffect(() => {
       setErrMsg('');
   }, [current , email , date,fav,gender,first,last,user, pwd, matchPwd])

   const handleSubmit = async (e) => {
       e.preventDefault();
       // if button enabled with JS hack
      
       const v1 = PWD_REGEX.test(pwd);
       
       if (!v1) {
           setErrMsg("Invalid Entry");
           return;
       }
       axios.post("http://localhost:8080/api/v1/auth/reset-password",{
           currentPassword:current,
           newPassword:pwd
       } ,
       {
         headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
       } 
       
       ).then((response)=>{
           console.log(response) 
           toast.success('password reset successfuly', {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
           
           //clear state and controlled inputs
           //need value attrib on inputs for this
           setCurrent('');
           setPwd('');
           setMatchPwd('');
          
          
       }).catch((error)=>{
           if(error.response.status ===403 ||error.response.status ===400){
               setErrMsg('current password is wrong');
           }
           errRef.current.focus();
           console.log(error) ; 
       })
      
   }
    
    return (
       
                <div className="song_side " >
                <nav>
                    <SongsUser/>
                </nav> 
                    <ToastContainer 
                        position="top-center"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
        
            <div class="register_container" style={{marginLeft:"356px"}} >
                    <img src="./images/uper-signin.jpeg" height="76px" width="100%" alt=""/>
                    <form onSubmit={handleSubmit} >

                        <div class="register_container_content" > 
                            <h5>Reset Your Password</h5>
                            <hr style={{marginTop:'15px' , width:"36%" }} ></hr>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <div className="register_field" >
                            {/* current password */}
                                <label htmlFor="current">
                                   current password:
                                </label>
                                    <input
                                        placeholder="current password"
                                        type="text"
                                        id="current"
                                        onChange={(e) => setCurrent(e.target.value)}
                                        value={current}
                                        required
                                        aria-describedby="currentnote"
                                    
                                    />
                                {/* current password */}
                            </div>
                            <div className="register_field" >
                            {/* new password */}
                                <label htmlFor="password">
                                   new password:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                </label>
                                <div style={{position:"relative"}} >
                                    <input
                                        placeholder="new password"
                                        type={passwordType}
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                    />
                                    <div className='form_eye' onClick={togglePassword}>
                                        { passwordType==="password"? <FontAwesomeIcon icon={faEyeSlash} /> :<FontAwesomeIcon icon={faEye} /> }
                                    </div>
                                </div>   
                                <p id="pwdnote" className={pwdFocus && pwd &&!validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 32 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>
                                {/* new password */}
                            </div>
                            <div className="register_field" >
                                {/* confirm password */}
                                <label htmlFor="confirm_pwd">
                                    confirm password:
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                </label>
                                <div  style={{position:"relative"}} >
                                    <input
                                        placeholder="confirm password"
                                        type={confirmPasswordType}
                                        id="confirm_pwd"
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        value={matchPwd}
                                        required
                                        aria-invalid={validMatch ? "false" : "true"}
                                        aria-describedby="confirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                    />
                                    <div className='form_eye' onClick={toggleConfirmPassword}>
                                            { confirmPasswordType==="password"? <FontAwesomeIcon icon={faEyeSlash} /> :<FontAwesomeIcon icon={faEye} /> }
                                    </div>
                                </div>
                                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>
                                {/* confirm password */}
                            </div>
                          
                                <div className="register_button" >
                                    <button style={{marginBbottom: "60px"}} disabled={!validPwd || !validMatch ? true : false}>Reset</button>
                                </div>
                        </div>  
                    </form>
            </div>

       
                     
             
      </div>
    );
};

export default ResetPassword;