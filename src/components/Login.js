import React, { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

    const [values , setValues] = useState({
        name:'' , 
        password:''
    })

    const [errors , setError] = useState({}) ; 

    function handleChange(e){
        setValues({...values , [e.target.name] :e.target.value})
    }

    const [errMsg, setErrMsg] = useState('');
    useEffect(() => {
        setErrMsg('');
    }, [values.name,values.password])

    function handleSubmit(e){
        e.preventDefault() ;
        console.log(values.name)
        console.log(values.password)
        
        axios.post("http://localhost:8080/api/v1/auth/login",{
            username:values.name,
            password:values.password
        }).then((response)=>{
            console.log(response.data.access_token)
            localStorage.setItem('accessToken',response.data.access_token) 
            console.log(localStorage)
            navigate("/home")
        }).catch((error)=>{
            console.log(error) ; 
            if(error.response.status ===400&&values.name===""&&values.password===''){
                setError(
                    {
                        name : "username required"  ,
                        password : "password required"
                    }
                )  

            }else if(error.response.status ===400&&values.name===''){
                setError(
                    {
                        name : "username required" 
                    }
                ) ; 
            }else if(error.response.status ===400&&values.password===''){
                setError(
                    {
                        password : "password required" 
                    }
                ) ; 
            }else if(error.response.status ===403 ||error.response.status ===400){
                // setError( {
                //         invalid:"invalid username or password"
                // }) ;
                setErrMsg("invalid username or password");
                setError({})

            }
        

           

        })
    }
    const navigate =  useNavigate()
    useEffect(()=>{
        if(Object.keys(errors).length===0 &&(values.name !=="" && values.password !==""  )){
                
        }
    }, [errors] )
    function navigateRegister (){
        navigate('/register')
    }
    return (
        <div className='form_background' >
            <div class="form_container" >
                <img src="./images/uper-signin.jpeg" width="100%" alt=""/>
                <form onSubmit={handleSubmit} >
                    <div class="form_container_content" > 
                            <h5>To continue, log in to BEAT</h5>
                            <hr/>   
                            <p  className={errMsg ? "login_errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <div class="form_field" >
                                <label for="">username</label>
                                <br/>
                                <input type="text" className="login__input" placeholder="User name" name='name'    onChange={handleChange} autoComplete="off" />
                                {errors.name &&
                                <p className='instructions' >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errors.name}
                                </p> 
                                } 
                            </div>
                            <div class="form_field" >
                                <label for="">password</label>
                                <br/>
                                <input type="password" className="login__input" placeholder="Password" name='password' onChange={handleChange} autoComplete="off" />
                                {errors.password &&   
                                <p className='instructions' >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errors.password}
                                </p>
                                } 
                            </div>
                            <div class="form_button" >
                                <button>Log in</button>
                                <hr/>
                            </div> 
                            <div class="sign_up_button text-center  " >
                                <h6 href="">Don't have an account ?</h6>
                                <button onClick={navigateRegister} >Sign Up</button>
                            </div>  
                        
                    </div>
                </form>
            </div>
        
        </div>
    );
};

export default Login;
