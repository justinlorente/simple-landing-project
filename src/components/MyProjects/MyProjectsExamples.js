import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const MyProjectsSamples = (props) => {
  const { projectType, title, image } = props;

  return (
    <div className="MyProjectsExamples-wrapper">
      <div className="MyProjectsExamples-images">
        <Image src={image} alt="" fill />
      </div>
      <div className="MyProjectsExamples-information">
        <h4 className="MyProjectsExamples-type">{projectType}</h4>
        <p className="MyProjectsExamples-title">{title}</p>
      </div>
    </div>
  );
};

MyProjectsSamples.propTypes = {
  projectType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};


export default MyProjectsSamples;
