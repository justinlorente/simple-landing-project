import React from "react";
import Head from "next/head";
import Layout from "../src/components/Layout";
import AboutMe from "../src/components/AboutMe";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import MyProjects from "../src/components/MyProjects";
import Testimonials from "../src/components/Testimonials";
import ContactMe from "../src/components/ContactMe";


const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Mumair | Home</title>
      </Head>
      <Hero />
      <AboutMe />
      <Services />
      <MyProjects />
      <Testimonials />
      <ContactMe />
    </Layout>
  );
};

export default Home;
