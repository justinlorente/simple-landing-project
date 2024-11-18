import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const ServicesCard = (props) => {
  const { title, image, customClass } = props;

  return (
    <div className={`ServicesCard-wrapper ${customClass}`}>
      <div className="ServicesCard-image">
        <Image src={image} alt="" />
      </div>
      <h3 className="ServicesCard-title">{title}</h3>
      <p className="ServicesCard-description">
        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
        interdum
      </p>
    </div>
  );
};

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  customClass: PropTypes.string,
};

ServicesCard.defaultProps = {
  customClass: "",
};

export default ServicesCard;
