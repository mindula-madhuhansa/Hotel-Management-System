import PropTypes from "prop-types";

export default function RoomTypeCard({
  roomTypeName,
  maxGuestCapacity,
  ratePerNight,
}) {
  return (
    <div className="flex bg-[#4b79d5] p-4 w-max text-white rounded-xl md:text-lg">
      <div>
        <h1>Room Type: {roomTypeName}</h1>
        <h1>Max Guest Capacity: {maxGuestCapacity}</h1>
        <h1>Rate per Night ($): {ratePerNight}</h1>
      </div>
    </div>
  );
}

RoomTypeCard.propTypes = {
  roomTypeName: PropTypes.string.isRequired,
  maxGuestCapacity: PropTypes.string.isRequired,
  ratePerNight: PropTypes.number.isRequired,
};
