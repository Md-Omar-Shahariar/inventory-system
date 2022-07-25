import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class="lg:max-w-lg  rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
