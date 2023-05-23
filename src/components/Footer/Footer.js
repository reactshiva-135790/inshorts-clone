import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="#" target="__blank">
          Shiva Maurya
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/roadsidecoder/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="#" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
     
      </div>
    </div>
  );
};

export default Footer;
