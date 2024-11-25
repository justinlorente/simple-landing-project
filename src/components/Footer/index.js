import React from "react";
import Image from "next/image";
import Logo from "../../../assets/images/mumair_logo.png";
import facebookLogo from "../../../assets/images/facebook-logo.png";
import twitterLogo from "../../../assets/images/twitter-logo.png";
import instagramLogo from "../../../assets/images/instagram-logo.png";
import linkedinLogo from "../../../assets/images/linkedin-logo.png";

const Footer = () => {
  return (
    <footer className="Footer-wrapper">
      <div className="Footer-logo">
        <Image src={Logo} alt="" fill />
      </div>
      <ul className="Footer-menu-items">
        <li className="Footer-menu-item">Home</li>
        <li className="Footer-menu-item">About Me</li>
        <li className="Footer-menu-item">Services</li>
        <li className="Footer-menu-item">Projects</li>
        <li className="Footer-menu-item">Testimonials</li>
        <li className="Footer-menu-item">Contact</li>
      </ul>
      <ul className="Footer-social-media-items">
        <li className="Footer-social-media-item">
          <a href="#">
            <Image src={facebookLogo} alt="facebook" />
          </a>
        </li>
        <li className="Footer-social-media-item">
          <a href="#">
            <Image src={twitterLogo} alt="twitter" />
          </a>
        </li>
        <li className="Footer-social-media-item">
          <a href="#">
            <Image src={instagramLogo} alt="instagram" />
          </a>
        </li>
        <li className="Footer-social-media-item">
          <a href="#">
            <Image src={linkedinLogo} alt="linkedIn" />
          </a>
        </li>
      </ul>
      <div className="Footer-all-rights">
        <p className="Footer-all-rights-text">
          © 2023 <span className="Footer-brand-name">Mumair</span> All Rights Reserved , Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
