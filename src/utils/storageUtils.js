
export const saveHotels = (hotels) => {
  try {
    localStorage.setItem("hotels", JSON.stringify(hotels));
    return true;
  } catch (error) {
    console.error("Error saving hotels:", error);
    return false;
  }
};

export const getHotels = () => {
  try {
    const savedHotels = localStorage.getItem("hotels");

    return savedHotels ? JSON.parse(savedHotels) : [];
  } catch (error) {
    console.error("Error retrieving hotels:", error);
    return [];
  }
};

export const clearHotels = () => {
  localStorage.removeItem("hotels");
};
