

import {
  ADD_HOTEL,
  UPDATE_HOTEL,
  DELETE_HOTEL,
  SET_HOTELS
} from "./actionTypes";

const initialState = {
  hotels: []
};

function hotelReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        hotels: action.payload
      };

    case ADD_HOTEL:
      return {
        ...state,
        hotels: [...state.hotels, action.payload]
      };

    case UPDATE_HOTEL:
      return {
        ...state,
        hotels: state.hotels.map((hotel) =>
          String(hotel.id) === String(action.payload.id)
            ? { ...hotel, ...action.payload }
            : hotel
        )
      };

    case DELETE_HOTEL:
      return {
        ...state,
        hotels: state.hotels.filter(
          (hotel) => String(hotel.id) !== String(action.payload)
        )
      };

    default:
      return state;
  }
}

export default hotelReducer;
