import React from "react";
import Banner from "./Banner";
import Bannner2 from "./Bannner2";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Bannner2></Bannner2>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
