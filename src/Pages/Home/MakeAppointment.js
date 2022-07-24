import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import GradientButton from "../Shared/GradientButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex items-center justify-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-10 ">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl text-white">Make An Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          aliquid non odit laborum nostrum. Tempora, libero. Porro et
          perspiciatis dolore, nobis quibusdam nihil praesentium laborum
          temporibus odio delectus sunt natus nulla ex, qui laboriosam eligendi
          reiciendis? Totam aliquid rem exercitationem?
        </p>
        <GradientButton>Get Started</GradientButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
