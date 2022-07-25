import React from "react";
import Banner from "./Banner";
import Bannner2 from "./Bannner2";
import Footer from "../Shared/Footer";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Bannner2></Bannner2>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
