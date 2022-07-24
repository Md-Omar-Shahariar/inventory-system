import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  const cardInfo = {
    title1: "Opening Hours",
    title2: "Visit Our Location",
    title3: "Contact Us Now",
    accent: "bg-accent",
    gradient: "bg-gradient-to-r from-secondary to-primary",
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        bgClass={cardInfo.gradient}
        cardTitle={cardInfo.title1}
        img={clock}
      ></InfoCard>
      <InfoCard
        bgClass={cardInfo.accent}
        cardTitle={cardInfo.title2}
        img={marker}
      ></InfoCard>
      <InfoCard
        bgClass={cardInfo.gradient}
        cardTitle={cardInfo.title3}
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
