import { put, call, takeEvery } from "redux-saga/effects";
import { GetCurrentWeatherDataAction, setCurrentWeatherData, setCurrentWeatherError } from './index.actions'
import { OpenWeatherAPI } from '../../api'

function* fetchCurrentWeather(action: GetCurrentWeatherDataAction): any {
   const api = new OpenWeatherAPI()
   const data = yield call(api.getCurrent, action.payload);

  if (data.status === "error") {
    yield put(setCurrentWeatherError())
  } else {
    yield put(setCurrentWeatherData(data))
  }
}

export function* watchGetCurrentWeather() {
  yield takeEvery('GET_CURRENT_WEATHER_DATA', fetchCurrentWeather)
}