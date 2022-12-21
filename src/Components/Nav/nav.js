// import React from "react";

import "./nav.css";
import { Link, Switch, Route, useParams } from "react-router-dom";
// import { AddMovies, Body } from '../body/bodys';
// import {useState} from "react";
// import { AboutUs } from './AboutUs';
// import { Change } from "../body/Change";
// import { Login, Registration } from "./Login";
// import { CssBaseline } from "@mui/material";

export function Nav() {
  return (
    <div>
      <div>
        {/* <CssBaseline /> */}
        <ul className="nav-ul">
          <li>
            <img
              className="logoNav nav-li"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              width="130"
              height="50"
              alt="logo"
            />
          </li>

          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li className="nav-li">
            <Link to="/Movies">Movies</Link>
          </li>
          <li className="nav-li">
            <Link to="/AddMovies">Add Movies</Link>
          </li>
          <li className="nav-li">
            <Link to="/Channels">Channels</Link>
          </li>
        </ul>
      </div>
      {/* <div>
           <Link to={"/login"} > <button  >Login</button> </Link>
           <Link to={"/registration"} > <button  >Registration</button> </Link>
           
        </div> */}
    </div>
  );
}
export function Channels() {
  return <h2 className="content">Channels</h2>;
}
export function NotFound() {
  return (
    <img src="https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg" width="100%" height="620px" ></img>
  );
}
