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

const Register = () => {
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
    const errRef = useRef();
   

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

    useEffect(() => {
        firstRef.current.focus();
    }, [])  

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
    }, [email , date,fav, gender,first,last,user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(first) ;
        const v2 = USER_REGEX.test(last) ;
        const v3 =  EMAIL_REGEX.test(email) ;
        const v4 = USER_REGEX.test(user);
        const v5 = PWD_REGEX.test(pwd);
        const v6 = fav!="" ;
        const v7 = date!="";
        const v8 = gender!="" ;
        if (!v1 || !v2 || !v3 ||!v4 ||!v5 ||!v6 ||!v7||!v8) {
            setErrMsg("Invalid Entry");
            return;
        }
        axios.post("http://localhost:8080/api/v1/auth/register",{
            firstName:first,
            lastName:last,
            email:email,
            password:pwd,
            username:user,
            favoriteGenre:fav,
            birthDate:date,
            gender:gender,
        }).then((response)=>{
            console.log(response) 
            navigate("/login")
            
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setFirst('');
            setLast('');
            setEmail('');
            setUser('');
            setPwd('');
            setMatchPwd('');
            setFav('');
            setDate('');
            setGender('');
           
        }).catch((error)=>{
            if(error.response.data.message ==='[P2002]: Unique constraint failed on the fields: (`username`)'){
                setErrMsg('username is already exist');
            }else if(error.response.data.message ==='[P2002]: Unique constraint failed on the fields: (`email`)'){
                setErrMsg('email is already exist');
             
            }
            errRef.current.focus();
            console.log(error) ; 
        })
       
    }

    return (
    
        <div className="form_background"  >
            <div class="register_container" >
                    <img src="./images/uper-signin.jpeg" height="76px" width="100%" alt=""/>
                    <form onSubmit={handleSubmit} >

                        <div class="register_container_content" > 
                            <h5>Sign Up To BEAT</h5>
                            <p  className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <div className="register_field" > 
                                <label htmlFor="firstname">
                                Fisrt name:
                                <FontAwesomeIcon icon={faCheck} className={validFirst ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validFirst || !first ? "hide" : "invalid"} />
                                </label>
                                <br/>
                                <input
                                placeholder="first name"
                                type="text"
                                id="firstname"
                                ref={firstRef}
                                autoComplete="off"
                                onChange={(e) => setFirst(e.target.value)}
                                value={first}
                                required
                                aria-invalid={validFirst ? "false" : "true"}
                                aria-describedby="firstnote"
                                onFocus={() => setFirstFocus(true)}
                                onBlur={() => setFirstFocus(false)}
                                />
                                <p id="firstnote" className={firstFocus && first && !validFirst ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                4 to 32 characters.<br />
                                Must begin with a letter.<br />
                                Letters, numbers, underscores, hyphens allowed.
                                </p>
                            </div>
                            <div className="register_field" >
                                 {/* last name */}
                                <label htmlFor="last">
                                    Last name:
                                    <FontAwesomeIcon icon={faCheck} className={validLast ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validLast || !last ? "hide" : "invalid"} />
                                </label>
                                <input
                                    placeholder="last name"
                                    type="text"
                                    id="last"
                                    autoComplete="off"
                                    onChange={(e) => setLast(e.target.value)}
                                    value={last}
                                    required
                                    aria-invalid={validLast ? "false" : "true"}
                                    aria-describedby="lastnote"
                                    onFocus={() => setLastFocus(true)}
                                    onBlur={() => setLastFocus(false)}
                                />
                                <p id="lastnote" className={lastFocus && last && !validLast ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 32 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>
                            {/* last name */}
                            </div>
                            <div className="register_field" >
                            {/* email */}
                                <label htmlFor="email">
                                    Email:
                                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                                </label>
                                <input
                                    placeholder="email"
                                    type="text"
                                    id="email"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    aria-invalid={validEmail ? "false" : "true"}
                                    aria-describedby="lastnote"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                />
                                <p id="lastnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    This email is invalid. <br/>
                                     Make sure it's written like example@email.com
                                </p>
                            {/* email */}
                            </div>  
                            <div className="register_field" >
                            {/* username */}
                                <label htmlFor="username">
                                    Username:
                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                                </label>
                                <input
                                    placeholder="user name"
                                    type="text"
                                    id="username"
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 32 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>

                            {/* username */}
                            </div>
                            <div className="register_field" >
                            {/* password */}
                                <label htmlFor="password">
                                    Password:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                </label>
                                <div style={{position:"relative"}} >
                                    <input
                                        placeholder="password"
                                        type={passwordType}
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        autoComplete="off"
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
                                {/* password */}
                            </div>
                            <div className="register_field" >
                                {/* confirm password */}
                                <label htmlFor="confirm_pwd">
                                    Confirm Password:
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
                            <div className="register_field" >
                                {/* favorite genre */}
                                <label htmlFor="favgenre">
                                    Favorite genre:
                                    <FontAwesomeIcon icon={faCheck} className={validFav ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validFav || !fav ? "hide" : "invalid"} />
                                </label>
                                <select
                                    type="text"
                                    id="favgenre"
                                    autoComplete="off"
                                    onChange={(e) => setFav(e.target.value)}
                                    value={fav}
                                    required
                                    aria-invalid={validFav ? "false" : "true"}
                                    aria-describedby="favnote"
                                    onFocus={() => setFavFocus(true)}
                                    onBlur={() => setFavFocus(false)}
                                    className="form-select form-select-sm" aria-label=".form-select-sm example"
                                >
                                    <option value="" disabled hidden  selected >choose your favorite genre </option>
                                    <option value="Pop">Pop</option>
                                    <option value="Rock">Rock</option>
                                    <option value="HipHop">HipHop</option>
                                    <option value="Jazz">Jazz</option>
                                    <option value="Country">Country</option>
                                    <option value="Blues">Blues</option>
                                    <option value="Reggae">Reggae</option>

                                </select>    
                                {/* favorite genre */}
                            </div>
                            <div className="register_field" >
                                
                                {/* birthdate */}
                                <label htmlFor="birthdate">
                                        Choose your birth date
                                        <FontAwesomeIcon icon={faCheck} className={validDate ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validDate || !date ? "hide" : "invalid"} />
                                    </label>
                                    <input
                                        type="date"
                                        id="birthdate"
                                        autoComplete="off"
                                        onChange={(e) => setDate(e.target.value)}
                                        value={date}
                                        required
                                        aria-invalid={validDate ? "false" : "true"}
                                        aria-describedby="datenote"
                                        onFocus={() => setDateFocus(true)}
                                        onBlur={() => setDateFocus(false)}
                                    />
                                {/* birthdate */}
                      
                            </div>
                            <div className="register_checkbox" >
                                 {/* gender */}
                                    <label >
                                        What is your gender
                                        <FontAwesomeIcon icon={faCheck} className={validGender ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validGender || !gender ? "hide" : "invalid"} />
                                    </label>
                                    <br/>
                                    <div className="form-check form-check-inline" >
                                        <input
                                            className="form-check-input"
                                            name="gender"
                                            type="radio"
                                            id="inlineRadio1"
                                            autoComplete="off"
                                            onChange={(e) => setGender("Male")}
                                            value="Male"
                                            required
                                            aria-invalid={validGender ? "false" : "true"}
                                            aria-describedby="radionote"
                                            onFocus={() => setGenderFocus(true)}
                                            onBlur={() => setGenderFocus(false)}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio1" >male</label>
                                    </div>
                                    <div className="form-check form-check-inline" >
                                        <input
                                        className="form-check-input"
                                            name="gender"
                                            type="radio"
                                            id="inlineRadio2"
                                            autoComplete="off"
                                            onChange={(e) => setGender("Female")}
                                            value="Female"
                                            required
                                            aria-invalid={validGender ? "false" : "true"}
                                            aria-describedby="radionote"
                                            onFocus={() => setGenderFocus(true)}
                                            onBlur={() => setGenderFocus(false)}
                                        />
                                        <label className="form-check-label"  htmlFor="inlineRadio2" >female</label>
                                    </div>
                                    {/* gender */}
                            </div>
                                <div className="register_button" >
                                    <button disabled={!validFirst||!validLast ||!validEmail || !validName || !validPwd || !validMatch ||!validFav ||!validGender ||!validDate ? true : false}>Sign Up</button>
                                </div>
                                <h6> Already have an account? <Link to="/login">login</Link> </h6> 
                        </div>  
                    </form>
            </div>

       
        </div>
               
            
        
    )
}

export default Register
