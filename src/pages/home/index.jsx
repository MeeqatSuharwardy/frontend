/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AboutUs2 from "../../components/About-Us2";
import Services2 from "../../components/Services2";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Blogs2 from "../../components/Blogs2";
import IntroWithVertical from "../../components/Intro-with-vertical";
import Process from "../../components/Process";
import Brands from "../../components/Brands";
import LightLayout from "../../layouts/light";

const Home1 = () => {


  useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <IntroWithVertical />
      <Services2 />
      <AboutUs2 />
      <Portfolio2 />
      <br></br>
      <div className="container">
        <div className="section-head text-center">
      <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
            <div>        
  <Link href="/portfolio">
    <a className="btn-curve btn-color">
    <span >Discover Work</span>
    </a>
  </Link>
</div>  
</div>
</div>
</div>
</div>
      <Process />
      {/* <Team1 /> */}
      {/* <Testimonials1 withBg /> */}
      {/* <Brands /> */}
      {/* <Blogs2 /> */}
    </LightLayout>
  );
};

export default Home1;
