import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots, _id } = treatment;
  const treatmentDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const name = event.target.name.value;
    console.log(slot, name);
    setTreatment(null);
  };
  return (
    <div className="">
      <input type="checkbox" id="booking-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
          <form
            onSubmit={handleBooking}
            className="flex flex-col items-center gap-2 mt-5"
          >
            <input
              type="text"
              value={treatmentDate}
              disabled
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value={"Submit"}
              class="input input-bordered w-full max-w-xs btn btn-secondary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
