import {
  ICurrentResponse,
  IForecaseResponse,
  IStatusInterface,
} from "./index.types";

export class OpenWeatherAPI {
  public async getCurrent(
    city: string,
    options = {}
  ): Promise<(ICurrentResponse & IStatusInterface) | IStatusInterface> {
    const resp = await fetch(
      this.getUrl(`/weather?q=${city}`),
      this.getOptions(options)
    );

    if (resp.status === 404) {
      return { status: "error" };
    }

    const json = (await resp.json()) as any;

    return {
      status: "ok",
      data: {
        date: json.dt,
        main: {
          temp: json.main.temp,
          feelslike: json.main.feelslike,
          tempmin:  json.main.tempmin,
          temp_max: json.main.temp_max,
          pressure: json.main.pressure,
          humidity: json.main.humidity
        },
        summary: json.weather.main,
      },
      city: {
        id: json.sys.id,
        name: json.name,
        country: json.sys.country,
        sunrise: json.sys.sunrise,
        sunset: json.sys.sunset,
      },
    };
  }

  public async getForcast(
    city: string,
    options = {}
  ): Promise<(IForecaseResponse & IStatusInterface) | IStatusInterface> {
    const resp = await fetch(
      this.getUrl(`/forecast?q=${city}`),
      this.getOptions(options)
    );

    if (resp.status === 404) {
      return { status: "error" };
    }

    const json = (await resp.json()) as any;

    return {
      status: "ok",
      data: json.list.map((entry: any) => {
        return {
          date: entry.dt,
          main: {
            temp: entry.temp,
            feelslike: entry.feelslike,
            tempmin: entry.tempmin,
            temp_max: entry.temp_max,
            pressure: entry.pressure,
            humidity: entry.humidity,
          },
          summary: entry.weather[0].main,
        };
      }),
      city: {
        id: json.city.id,
        name: json.city.name,
        country: json.city.country,
        sunrise: json.city.sunrise,
        sunset: json.city.sunset,
      },
    };
  }

  private getUrl(path: string) {
    return `https://community-open-weather-map.p.rapidapi.com${path}`;
  }

  private getOptions(options: any) {
    return {
      ...options,
      headers: {
        ...options.headers,
        "x-rapidapi-key": "d815a5d420msh005f8b3b47c11f9p13bb5ejsna6a5be808307",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    };
  }
}
