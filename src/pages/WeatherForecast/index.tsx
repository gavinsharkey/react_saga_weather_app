import { useParams } from 'react-router-dom'

const WeatherForecast = () => {
  const { city } = useParams<{ city: string }>()

  return <div>Forecast in {city}</div>;
};

export default WeatherForecast;
