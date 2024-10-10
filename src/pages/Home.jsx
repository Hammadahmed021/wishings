import Header from "../components/common/Header/Header.jsx";
import Footer from "../components/common/Footer/Footer.jsx";
import {Blogs, CallToAction, FAQ, Hero, NewsletterSubscribe, Offer, Rating, SplitContent, Template, Testimonial, TwoColumnLayout} from '../components/Home/index.js'

import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Rating/>
      <Offer/>
      <SplitContent/>
      <Template/>
      <TwoColumnLayout/>
      <Testimonial/>
      <CallToAction/>
      <FAQ/>
      <Blogs/>
      <NewsletterSubscribe/>
      <Footer />
    </>
  );
};

export default Home;
