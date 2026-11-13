
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import HotelMap from "../components/HotelMap";

function HotelDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = useSelector((state) =>
    state.hotels.find((item) => String(item.id) === String(id))
  );

  if (!hotel) {
    return (
      <>
        <Header />

        <main className="details-not-found">
          <h2>Hotel Not Found</h2>
          <button onClick={() => navigate("/hotels")}>
            Back to Hotels
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="hotel-details-page">
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/hotels")}
        >
          ← Back to Hotels
        </button>

        <div className="details-container">
          <img
            src={hotel.image || "https://placehold.co/1000x500?text=Hotel"}
            alt={hotel.title}
            className="details-image"
          />

          <div className="details-content">
            <h1>{hotel.title}</h1>

            <p className="details-description">
              {hotel.description}
            </p>

            <h2 className="details-price">
              ₹{Number(hotel.price).toLocaleString("en-IN")}
            </h2>

            <div className="details-coordinates">
              <h3>Hotel Coordinates</h3>

              <p>
                <strong>Latitude:</strong> {hotel.latitude}
              </p>

              <p>
                <strong>Longitude:</strong> {hotel.longitude}
              </p>
            </div>

            <div className="details-amenities">
              <h3>Amenities</h3>

              {hotel.amenities && hotel.amenities.length > 0 ? (
                <ul>
                  {hotel.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              ) : (
                <p>No amenities added.</p>
              )}
            </div>

            <div className="details-map-section">
              <h3>Hotel Location on Map</h3>

              <HotelMap
                latitude={hotel.latitude}
                longitude={hotel.longitude}
                hotelName={hotel.title}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HotelDetailsPage;
