import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card shadow-2xl text-primary-content">
      <div class="card-body">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div class="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="booking-modal-6"
            class="btn btn-secondary uppercase text-white bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
