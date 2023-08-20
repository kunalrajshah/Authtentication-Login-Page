import {createContext} from 'react'

const AuthContext=createContext({
  token:"",
  isLoggedIn:false,
  Login:(token)=>{},
  Logout:()=>{},
});

export default AuthContext;