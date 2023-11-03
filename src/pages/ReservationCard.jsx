import PropTypes from "prop-types";

export default function ReservationCard({
  inDate,
  outDate,
  roomCount,
  guestCount,
  customerId,
}) {
  return (
    <div className="flex bg-[#4b79d5] p-4 w-max text-white rounded-xl md:text-lg">
      <div>
        <h1>Checked in date: {inDate}</h1>
        <h1>Checked out date: {outDate}</h1>
        <h1>Room count: {roomCount}</h1>
        <h1>Guest count: {guestCount}</h1>
        <h1>Customer ID: {customerId}</h1>
      </div>
    </div>
  );
}

ReservationCard.propTypes = {
  inDate: PropTypes.string.isRequired,
  outDate: PropTypes.string.isRequired,
  roomCount: PropTypes.number.isRequired,
  guestCount: PropTypes.number.isRequired,
  customerId: PropTypes.string.isRequired,
};
