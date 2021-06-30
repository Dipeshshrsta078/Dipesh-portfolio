import React, { useState } from "react";

import "./Navbar.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MenuIcon from "@material-ui/icons/Menu";

import IconButton from "@material-ui/core/IconButton";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebarToggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Dipesh Shrestha.
          </a>
          <div className="itemContainer">
            <IconButton
              aria-label="Github.com"
              title="Github Account"
              onClick={() => window.open("https://github.com/Dipeshshrsta078")}
            >
              <GitHubIcon className="icon" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn.com"
              title="Linkedin Account"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/dipesh-shrestha-557293212/"
                )
              }
            >
              <LinkedInIcon className="icon" />
            </IconButton>
            <IconButton
              aria-label="Instagram.com"
              title="Instagram Account"
              onClick={() =>
                window.open("https://www.instagram.com/dipeshshrsta.raw/")
              }
            >
              <InstagramIcon className="icon" />
            </IconButton>
            <IconButton
              aria-label="Facebook.com"
              title="Facebook Account"
              onClick={() =>
                window.open("https://www.facebook.com/dipesh.s.nepali.5/")
              }
            >
              <FacebookIcon className="icon" size="small" />
            </IconButton>
            <EmailIcon className="icon" color="disabled" />
              <span style={{color:'grey'}}>shrs1995@gmail.com</span>
          </div>
        </div>
        <div className="right">
        <IconButton> 
          <MenuIcon className="hamburgerMenu" />
          </IconButton>

          {/* {sidebar <MenuIcon className='hamburgerMenu' onClick='handleSidebarToggle'/>} */}
          {/* <a href="#portfolio">Portfolio</a>
          <a href="#aboutme">About Me</a>
          <a href="#contact">Contact</a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
