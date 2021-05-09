import "./index.css";

const WeatherCurrent = () => {
  return (
    <div className="card has-background-white p-4">
      <div className="card-content">
        <div className="columns">
          <div className="current-weather-content column">
            <p className="location has-text-weight-semibold">
              Weather in London, GB
            </p>
            <p className="subtitle is-5 has-text-dark">As of 12:30 PM CDT</p>
            <h1 className="title temperature">71°</h1>
            <h2 className="subtitle">Cloudy</h2>
          </div>
          <div className="column is-narrow">
            <h2 className="subtitle">High/Low</h2>
            <h1 className="title">80°/68°</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCurrent;
