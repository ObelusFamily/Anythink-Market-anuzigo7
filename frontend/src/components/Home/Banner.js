import React from "react";
import logo from "../../imgs/logo.png";
import { Search } from "./Search";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="container">
        <div className="row">
        <h3 className="col text-right">A place to get</h3>        
            <Search />
        <h3 className="col text-left"> the cool stuff.</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
