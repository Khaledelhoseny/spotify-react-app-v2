import React from 'react';

const LoginValidation = (values) => {
  let errors = {}
  if(!values.name){
    errors.name = "Name Required" ; 
  }else if(values.name.length < 5 ){
    errors.name = "name must be greater than 5" ; 
  }

  if(!values.password){
    errors.password = "password Required" ; 
  }

  return errors; 
};

export default LoginValidation ;