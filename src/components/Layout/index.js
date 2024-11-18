import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PropTypes from 'prop-types';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;