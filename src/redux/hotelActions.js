
import {
  ADD_HOTEL,
  UPDATE_HOTEL,
  DELETE_HOTEL,
  SET_HOTELS
} from "./actionTypes";

export const addHotel = (hotel) => ({
  type: ADD_HOTEL,
  payload: hotel
});

export const updateHotel = (hotel) => ({
  type: UPDATE_HOTEL,
  payload: hotel
});

export const deleteHotel = (id) => ({
  type: DELETE_HOTEL,
  payload: id
});

export const setHotels = (hotels) => ({
  type: SET_HOTELS,
  payload: hotels
});
