
import { useEffect, useState } from "react";
import { validateHotel } from "../utils/validation";

const emptyForm = {
  title: "",
  description: "",
  image: "",
  price: "",
  latitude: "",
  longitude: ""
};

function HotelForm({ hotel, onSave, onCancel }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (hotel) {
      setFormData({
        title: hotel.title || "",
        description: hotel.description || "",
        image: hotel.image || "",
        price: hotel.price ?? "",
        latitude: hotel.latitude ?? "",
        longitude: hotel.longitude ?? ""
      });
    } else {
      setFormData(emptyForm);
    }

    setErrors({});
  }, [hotel]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: ""
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateHotel(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSave({
      title: formData.title.trim(),
      description: formData.description.trim(),
      image: formData.image.trim(),
      price: Number(formData.price),
      latitude: Number(formData.latitude),
      longitude: Number(formData.longitude)
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{hotel ? "Edit Hotel" : "Add New Hotel"}</h2>

        <form className="hotel-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Hotel Name</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter hotel name"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter hotel description"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="image">Hotel Image URL</label>
            <input
              id="image"
              name="image"
              type="url"
              placeholder="Enter image URL"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price (₹)</label>
            <input
              id="price"
              name="price"
              type="number"
              min="1"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && (
              <span className="error-message">{errors.price}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="latitude">Latitude</label>
            <input
              id="latitude"
              name="latitude"
              type="number"
              step="any"
              placeholder="Enter latitude"
              value={formData.latitude}
              onChange={handleChange}
            />
            {errors.latitude && (
              <span className="error-message">{errors.latitude}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="longitude">Longitude</label>
            <input
              id="longitude"
              name="longitude"
              type="number"
              step="any"
              placeholder="Enter longitude"
              value={formData.longitude}
              onChange={handleChange}
            />
            {errors.longitude && (
              <span className="error-message">{errors.longitude}</span>
            )}
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>

            <button type="submit">
              {hotel ? "Update Hotel" : "Save Hotel"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HotelForm;
