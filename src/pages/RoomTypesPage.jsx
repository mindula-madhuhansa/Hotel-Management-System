import ReservationCard from "../components/ReservationCard";
import useFetch from "../hooks/useFetch";

export default function RoomTypesPage() {
  let { loading, error, data } = useFetch(
    "http://localhost:1337/api/room-types/?populate=*"
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
            cachedData.data.map((types) => {
              return (
                <ReservationCard
                  key={types.id}
                  roomTypeName={types.attributes.RoomTypeName}
                  maxGuestCapacity={types.attributes.MaxGuestCapacity}
                  ratePerNight={types.attributes.RatePerNight}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}
