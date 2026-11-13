
export const validateHotel = (hotel) => {
  const errors = {};

  if (!hotel.title || !hotel.title.trim()) {
    errors.title = "Hotel name is required";
  }

  if (!hotel.description || !hotel.description.trim()) {
    errors.description = "Description is required";
  }

  if (
    hotel.price === "" ||
    !Number.isFinite(Number(hotel.price)) ||
    Number(hotel.price) <= 0
  ) {
    errors.price = "Enter a valid price";
  }

  if (
    hotel.latitude === "" ||
    !Number.isFinite(Number(hotel.latitude)) ||
    Number(hotel.latitude) < -90 ||
    Number(hotel.latitude) > 90
  ) {
    errors.latitude = "Latitude must be between -90 and 90";
  }

  if (
    hotel.longitude === "" ||
    !Number.isFinite(Number(hotel.longitude)) ||
    Number(hotel.longitude) < -180 ||
    Number(hotel.longitude) > 180
  ) {
    errors.longitude = "Longitude must be between -180 and 180";
  }

  return errors;
};
