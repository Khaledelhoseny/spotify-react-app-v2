// import React from 'react';

// const SignUpValidation = (values) => {
//   let errors = {}
//   const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     const string_pattern = /^[a-zA-Z\s]+$/
//   if(!values.firstName){
//     errors.firstName = "firstName required" ; 
//   }

//   if(!values.lastName){
//     errors.lastName = "lastName required" ; 
//   }

//   if(!values.email){
//     errors.email = "email Required" ; 
//   }else if (!email_pattern.test(values.email)){
//     errors.email = "Please enter a valid email." ; 
//   }

//   if(!values.password){
//     errors.password = "password required" ; 
//   }else if(values.password.length < 4){
//     errors.password = "password must be longer than or equal to 4 characters" ; 
//   }else if(64 < values.password.length){
//     errors.password = "password must be shorter than or equal to 64 characters" ; 
//   }


  


//   if(!values.username){
//     errors.username = "username required" ; 
//   }else if(values.username.length < 4){
//     errors.username = "username must be longer than or equal to 4 characters" ; 
//   }else if(32 <values.username.length){
//     errors.username = "username must be shorter than or equal to 32 characters" ; 
//   }

//   if(!values.favoriteGenre){
//     errors.favoriteGenre = "favoriteGenre required" ; 
//   }
//   if(!values.birthDate){
//     errors.birthDate = "birthDate required" ; 
//   }
//   if(!values.gender){
//     errors.gender = "gender required" ; 
//   }
  
//   return errors; 
// };

// export default SignUpValidation ;