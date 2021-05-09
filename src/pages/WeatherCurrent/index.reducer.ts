import { ICurrentResponse } from "../../api/index.types";
import { CurrentWeatherActions } from "./index.actions";

export interface ICurrentWeatherState {
  status: "error" | "ok" | "loading";
  data: Partial<ICurrentResponse>;
}

const initialState: ICurrentWeatherState = {
  status: "loading",
  data: {},
};

const reducer = (state = initialState, action: CurrentWeatherActions) => {
  switch (action.type) {
    case "SET_CURRENT_WEATHER_DATA":
      return {
        ...state,
        status: "ok",
        data: action.payload,
      };
    case "SET_CURRENT_WEATHER_LOADING":
      return {
        ...state,
        status: "loading",
      };
    case "SET_CURRENT_WEATHER_ERROR":
      return {
        ...state,
        status: "error"
      }
    default:
      return state;
  }
};

export default reducer;
