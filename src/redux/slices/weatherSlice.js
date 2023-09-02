const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  weatherData: {},
  isLoading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherDataStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchWeatherDataSuccess(state, action) {
      state.isLoading = false;
      state.weatherData = action.payload;
    },
    fetchWeatherDataRejected(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchWeatherDataStart,
  fetchWeatherDataSuccess,
  fetchWeatherDataRejected,
} = weatherSlice.actions;

export default weatherSlice.reducer;
