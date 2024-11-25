import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importar el componente Link
import facebookLogo from "../../../assets/images/facebook-logo.png";
import twitterLogo from "../../../assets/images/twitter-logo.png";
import instagramLogo from "../../../assets/images/instagram-logo.png";
import linkedinLogo from "../../../assets/images/linkedin-logo.png";

const Hero = () => {
  return (
    <section className="Hero-wrapper">
      <div className="Hero-container">
        <div className="Hero-information-wrapper">
          <span className="Hero-greeting">Hi I am</span>
          <p className="Hero-creator-name">Muhammad Umair </p>
          <div className="Hero-titles-wrapper">
            <p className="Hero-title">
              UI &amp; UX
              <span className="Hero-subtitle">Designer</span>
            </p>
          </div>
          <p className="Hero-description">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className="Hero-hire-me-button">
            <Link href="#" className="Button-wrapper">
              Hire me
            </Link>
          </div>
        </div>
        <div className="Hero-image-wrapper">
          <div className="Hero-image" />
          <div className="Hero-image-square" />
          <ul className="Hero-social-layout">
            <li className="Hero-social-media-item">
              <Link href="/">
                <Image src={facebookLogo} alt="facebook" fill/>
              </Link>
            </li>
            <li className="Hero-social-media-item">
              <Link href="/">
                <Image src={twitterLogo} alt="twitter" fill/>
              </Link>
            </li>
            <li className="Hero-social-media-item">
              <Link href="/">
                <Image src={instagramLogo} alt="instagram" fill/>
              </Link>
            </li>
            <li className="Hero-social-media-item">
              <Link href="/">
                <Image src={linkedinLogo} alt="linkedIn" fill/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
