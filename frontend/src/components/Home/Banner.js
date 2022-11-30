import React from "react";
import logo from "../../imgs/logo.png";
import Search from "./Search";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <Search onChangeTitle={props.onChangeTitle} />
      </div>
    </div>
  );
};

export default Banner;
