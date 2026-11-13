
function HotelCard({ hotel, onView, onEdit, onDelete }) {
  return (
    <article className="hotel-card">
      <img
        src={hotel.image || "https://placehold.co/600x400?text=Hotel"}
        alt={hotel.title}
        className="hotel-image"
      />

      <div className="hotel-card-content">
        <h3 className="hotel-title">{hotel.title}</h3>

        <p className="hotel-description">
          {hotel.description}
        </p>

        <div className="hotel-coordinates">
          <p>
            <strong>Latitude:</strong> {hotel.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {hotel.longitude}
          </p>
        </div>

        <h3 className="hotel-price">
          ₹{Number(hotel.price).toLocaleString("en-IN")}
        </h3>

        <div className="hotel-actions">
          <button type="button" onClick={() => onView(hotel.id)}>
            View
          </button>

          <button type="button" onClick={() => onEdit(hotel)}>
            Edit
          </button>

          <button type="button" onClick={() => onDelete(hotel.id)}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default HotelCard;
