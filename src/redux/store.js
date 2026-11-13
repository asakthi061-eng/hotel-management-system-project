
import { createStore } from "redux";
import hotelReducer from "./hotelReducer";
import hotelData from "../data/hotelData";

const STORAGE_KEY = "hotels";

const loadHotels = () => {
  try {
    const savedHotels = localStorage.getItem(STORAGE_KEY);

    if (savedHotels !== null) {
      const parsedHotels = JSON.parse(savedHotels);

      if (Array.isArray(parsedHotels)) {
        const hasOldFields = parsedHotels.some(
          (hotel) =>
            Object.prototype.hasOwnProperty.call(hotel, "location") ||
            Object.prototype.hasOwnProperty.call(hotel, "rating")
        );

        if (!hasOldFields) {
          return parsedHotels;
        }

        localStorage.removeItem(STORAGE_KEY);
      }
    }
  } catch (error) {
    console.error("Error loading hotels:", error);
  }

  return hotelData;
};

const store = createStore(hotelReducer, {
  hotels: loadHotels()
});

store.subscribe(() => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(store.getState().hotels)
    );
  } catch (error) {
    console.error("Error saving hotels:", error);
  }
});

export default store;
