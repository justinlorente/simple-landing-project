import React from "react";
import ServicesCard from "./ServicesCard";
import services1 from "../../../assets/images/services-3.webp";
import services2 from "../../../assets/images/product-2.svg";
import services3 from "../../../assets/images/services-2.webp";
import services4 from "../../../assets/images/services-1.webp";


const Services = () => {
  return (
    <section className="Services-wrapper">
      <div className="Services-container">
        <h3 className="Services-title">Services</h3>
        <p className="Services-description">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="Services-products">
          <ServicesCard title="UI/UX" image={services1} />
          <ServicesCard title="Web Design" image={services2} />
          <ServicesCard title="App Design" image={services3} customClass="Services-app-design" />
          <ServicesCard title="Graphic Design" image={services4}  customClass="Services-graphic-design"/>
        </div>
      </div>
    </section>
  );
};

export default Services;
