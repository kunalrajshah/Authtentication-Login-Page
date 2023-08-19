import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-lightblue p-4 flex justify-between items-center bg-blue-600">
      <div className="text-2xl font-semibold text-white">ReactAuth</div>
      <ul className="flex space-x-4 ulList">
        <li>
          <a href="#" className=" p-2 text-xl nav-link">
           <NavLink to="/login">Login</NavLink>
          </a>
        </li>
        <li>
          <a href="#" className=" p-2 text-xl nav-link">
          <NavLink to="/profile">Profile</NavLink>
          </a>
        </li>
        <li>
          <a href="#" className="border p-2 rounded-md nav-link">
          <NavLink to="/">Logout</NavLink>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
