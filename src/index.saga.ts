import { all } from 'redux-saga/effects'
import { watchGetCurrentWeather } from './pages/WeatherCurrent/index.saga'

export default function* rootSaga() {
  yield all([
    watchGetCurrentWeather()
  ])
}