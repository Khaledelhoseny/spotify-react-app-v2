import React from 'react';

const ResetPasswordVald = (values) => {
  let errors = {}
  const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const string_pattern = /^[a-zA-Z\s]+$/
  if(!values.currentPassword){
    errors.currentPassword = "current password Required" ; 
  }else if(values.currentPassword.length < 4){
    errors.currentPassword = "current password must be longer than or equal to 4 characters" ; 
  }else if(64 < values.currentPassword.length){
    errors.currentPassword = "current password must be shorter than or equal to 64 characters" ; 
  }


  if(!values.newPassword){
    errors.newPassword = "newPassword required" ; 
  }else if(values.newPassword.length < 4){
    errors.newPassword = "new password must be longer than or equal to 4 characters" ; 
  }else if(64 < values.newPassword.length){
    errors.newPassword = "new password must be shorter than or equal to 64 characters" ; 
  }


  


 
  return errors; 
};

export default ResetPasswordVald ;