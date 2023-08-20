import React, { useContext } from "react";
import { NavLink} from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../Store/AuthContext";

const Navbar = () => {
  const AuthCtxt = useContext(AuthContext);
 
  const LogOutHandler=()=>{
    AuthCtxt.Logout();
  }
  return (
    <nav className="bg-lightblue p-4 flex justify-between items-center bg-blue-600">
      <div className="text-2xl font-semibold text-white">ReactAuth</div>
      <ul className="flex space-x-4 ulList">
        {!AuthCtxt.isLoggedIn && (
          <li>
            <a href="#" className=" p-2 text-xl nav-link">
              <NavLink to="/login">Login</NavLink>
            </a>
          </li>
        )}
        {AuthCtxt.isLoggedIn && (
          <li>
            <a href="#" className=" p-2 text-xl nav-link">
              <NavLink to="/profile">Profile</NavLink>
            </a>
          </li>
        )}
        {AuthCtxt.isLoggedIn && (
          <li>
            <a
              href="#"
              className="border p-2 rounded-md nav-link hover:bg-green-400 hover:font-semibold hover:text-black"
            >
              <NavLink to="/login" onClick={LogOutHandler}>Logout</NavLink>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
