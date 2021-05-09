import { combineReducers } from 'redux'
import currentWeatherReducer, { ICurrentWeatherState } from "./pages/WeatherCurrent/index.reducer"

export interface IRootState {
  currentWeather: ICurrentWeatherState
}

export default combineReducers({
  currentWeather: currentWeatherReducer
})
