import ReservationCard from "../components/ReservationCard";
import useFetch from "../hooks/useFetch";

export default function ReservationsPage() {
  let { loading, error, data } = useFetch(
    "http://localhost:1337/api/reservations/?populate=*"
  );
  const cachedData = !loading && !error && data;
  return (
    <div className="h-screen">
      {error ? (
        console.log("Error")
      ) : loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex gap-5 md:gap-10 my-6 md:my-12 md:mx-8 justify-center items-center flex-col md:flex-row">
          {cachedData &&
            cachedData.data.map((reservation) => {
              return (
                <ReservationCard
                  key={reservation.id}
                  inDate={reservation.attributes.InDate}
                  outDate={reservation.attributes.OutDate}
                  roomCount={reservation.attributes.RoomCount}
                  guestCount={reservation.attributes.GuestCount}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}
