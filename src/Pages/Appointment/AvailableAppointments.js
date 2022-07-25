import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((date) => setServices(date));
  }, []);
  console.log(services);
  return (
    <div>
      <h4 className="text-primary text-center font-bold text-2xl">
        Available Appointments on : {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AppointmentService
            service={service}
            key={service._id}
            setTreatment={setTreatment}
          ></AppointmentService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
