import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthContextprovider = (props) => {
  const[Token,setToken]=useState(null);
  const userIsLoggedIn=!!Token;  // The !! is a shorthand way to convert a value to a boolean.if token is empty then userIsLoggedIn is false.

  const LoginHandler=(token)=>{
    setToken(token)
  }

  const LogOutHandler=()=>{
    setToken(null)
  }

  const ContextValue={
    token:Token,
    isLoggedIn:userIsLoggedIn,
    Login:LoginHandler,
    Logout:LogOutHandler
  } 
  return (
    <AuthContext.Provider value={ContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextprovider;
