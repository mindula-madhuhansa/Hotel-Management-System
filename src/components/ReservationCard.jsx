import PropTypes from "prop-types";

export default function ReservationCard({
  inDate,
  outDate,
  roomCount,
  guestCount,
  customerId,
}) {
  return (
    <div className="flex bg-[#7c7c7c] p-4 w-max">
      <div>
        <h1>{inDate}</h1>
        <h1>{outDate}</h1>
        <h1>{roomCount}</h1>
        <h1>{guestCount}</h1>
        <h1>{customerId}</h1>
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
