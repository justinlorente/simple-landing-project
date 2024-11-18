import React from "react";
import InputRange from "../Input/InputRange";

const AboutMe = () => {
  return (
    <section className="AboutMe-wrapper">
      <div className="AboutMe-container">
      <div className="AboutMe-image-wrapper">
        <div className="AboutMe-image" />
        <div className="AboutMe-image-square" />
      </div>
      <div className="AboutMe-information-wrapper">
        <h3 className="AboutMe-title">About Me</h3>
        <p className="AboutMe-description">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <InputRange text="UX" percentage="95" />
        <InputRange text="Website Design" percentage="90" />
        <InputRange text="App Design " percentage="94"/>
        <InputRange text="Graphic Design"  percentage="90"/>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
