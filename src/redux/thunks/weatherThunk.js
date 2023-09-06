import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchWeatherDataRejected,
  fetchWeatherDataStart,
  fetchWeatherDataSuccess,
} from '../slices/weatherSlice';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherData = createAsyncThunk(
  'api/getWeather',
  async (city, { dispatch, rejectWithValue }) => {
    try {
      dispatch(fetchWeatherDataStart());
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
      );
      const data = await response.json();
      dispatch(fetchWeatherDataSuccess(data));
      return data;
    } catch (error) {
      dispatch(fetchWeatherDataRejected(error.message));
      return rejectWithValue(error.message);
    }
  }
);
