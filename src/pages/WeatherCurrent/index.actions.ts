import { ICurrentResponse } from "../../api/index.types";

// Action Types
export interface GetCurrentWeatherDataAction {
  type: "GET_CURRENT_WEATHER_DATA", payload: string
}

export interface SetCurrentWeatherDataAction {
  type: "SET_CURRENT_WEATHER_DATA", payload: ICurrentResponse
}

export interface SetCurrentWeatherLoadingAction {
  type: "SET_CURRENT_WEATHER_LOADING"
}

export interface SetCurrentWeatherErrorAction {
  type: "SET_CURRENT_WEATHER_ERROR"
}

// Union of all action types
export type CurrentWeatherActions = 
  | SetCurrentWeatherDataAction
  | SetCurrentWeatherLoadingAction
  | SetCurrentWeatherErrorAction

// Action creators
export const getCurrentWeather = (payload: string): GetCurrentWeatherDataAction => {
  return { type: "GET_CURRENT_WEATHER_DATA", payload}
}

export const setCurrentWeatherData = (payload: ICurrentResponse): SetCurrentWeatherDataAction => {
  return { type: "SET_CURRENT_WEATHER_DATA", payload }
}

export const setCurrentWeatherLoading = (): SetCurrentWeatherLoadingAction => {
  return { type: "SET_CURRENT_WEATHER_LOADING" }
}

export const setCurrentWeatherError = (): SetCurrentWeatherErrorAction => {
  return { type: "SET_CURRENT_WEATHER_ERROR" }
}