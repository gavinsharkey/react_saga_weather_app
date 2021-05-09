import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from "./common/Navbar";
import WeatherCurrent from "./pages/WeatherCurrent";
import WeatherForecast from "./pages/WeatherForecast";

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <div className="container is-fluid mt-5">
        <Switch>
          <Route path="/current">
            <WeatherCurrent />
          </Route>
          <Route exact path="/forecast/:city">
            <WeatherForecast />
          </Route>
          <Route path="*">
            <Redirect to="current" />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
