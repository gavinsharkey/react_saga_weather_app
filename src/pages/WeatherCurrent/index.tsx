import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentWeatherData } from './index.actions'
import "./index.css";
import { IRootState } from '../../index.reducer';
import { ICurrentWeatherState } from './index.reducer';
import { getTimeInfoFromTimestamp } from '../../utilities'

const WeatherCurrent = () => {
  const dispatch = useDispatch()
  const { status, data: { data, city }} = useSelector<IRootState, ICurrentWeatherState>(state => state.currentWeather)

  useEffect(() => {
    dispatch(getCurrentWeatherData('San Francisco'))
  }, [dispatch])

  const { time, timezone } = getTimeInfoFromTimestamp(data?.date || Date.now())

  if (status === "loading") {
    return (
      <div className="card has-background-white p-4">
        <div className="card-content">
          <div className="has-background-light block loading-large"></div>
          <div className="has-background-light block loading-small"></div>
          <div className="has-background-light block loading-small"></div>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return <div className="card has-background-white p-4">
      <div className="card-content is-flex is-justify-content-center is-align-content-center">
        <h3 className="has-text-weight-semibold">There was an error loading your weather!</h3>
      </div>
    </div>
  }

  return (
    <div className="card has-background-white p-4">
      <div className="card-content">
        <div className="columns">
          <div className="current-weather-content column">
            <p className="location has-text-weight-semibold">
              Weather in {city?.name}, {city?.country}
            </p>
            <p className="subtitle is-5 has-text-dark">As of {time}, {timezone}</p>
            <h1 className="title temperature">{data?.main.temp}°</h1>
            <h2 className="subtitle">{data?.summary}</h2>
          </div>
          <div className="column is-narrow">
            <h2 className="subtitle">High/Low</h2>
            <h1 className="title">{data?.main.temp_max}°/{data?.main.temp_min}°</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCurrent;
