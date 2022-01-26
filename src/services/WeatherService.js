import api from "../axios"

export class WeatherService {
  static getCurrentWeather(city) {
    return api.get(`/weather?q=${city}`)
  }
  static getWeeklyWeather(lon, lat) {
    return api.get(`/onecall?lat=${lat}&lon=${lon}&exclude=minutely`)
  }
}
