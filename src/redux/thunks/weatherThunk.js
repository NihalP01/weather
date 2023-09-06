import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchWeatherDataRejected,
  fetchWeatherDataStart,
  fetchWeatherDataSuccess,
} from '../slices/weatherSlice';

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = '9d70cb849ca24960b99154300230407';

export const getWeatherData = createAsyncThunk(
  'api/getWeather',
  async (city, { dispatch, rejectWithValue }) => {
    try {
      dispatch(fetchWeatherDataStart());
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
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
