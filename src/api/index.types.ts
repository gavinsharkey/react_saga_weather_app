export interface IWeather {
  date: number
  main: {
    temp: number;
    feelslike: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  summary: string;
}

export interface IStatusInterface {
  status: "error" | "ok" | "loading"
}

export interface ICurrentResponse {
  data: IWeather;
  city: {
    id: number;
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
  };
}

export interface IForecaseResponse {
  data: IWeather[];
  city: {
    id: number;
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
  };
}
