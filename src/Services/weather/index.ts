import { WEATHER_API } from "./base";

// export interface Root {
//   location: Location
//   current: Current
//   forecast: Forecast
// }

// export interface Location {
//   name: string
//   region: string
//   country: string
//   lat: number
//   lon: number
//   tz_id: string
//   localtime_epoch: number
//   localtime: string
// }

// export interface Current {
//   temp_c: number
//   is_day: number
//   condition: Condition
//   precip_mm: number
//   humidity: number
// }

// export interface Condition {
//   text: string
//   icon: string
//   code: number
// }

// export interface Forecast {
//   forecastday: Forecastday[]
// }

// export interface Forecastday {
//   date: string
//   date_epoch: number
//   day: Day
//   astro: Astro
//   hour: Hour[]
// }

// export interface Day {
//   maxtemp_c: number
//   mintemp_c: number
//   totalprecip_mm: number
//   totalsnow_cm: number
//   avghumidity: number
//   daily_will_it_rain: number
//   daily_chance_of_rain: number
//   condition: Condition2
// }

// export interface Condition2 {
//   text: string
//   icon: string
//   code: number
// }

// export interface Astro {}

// export interface Hour {
//   time_epoch: number
//   time: string
//   temp_c: number
//   is_day: number
//   condition: Condition3
//   precip_mm: number
//   humidity: number
//   will_it_rain: number
//   chance_of_rain: number
// }

// export interface Condition3 {
//   text: string
//   icon: string
//   code: number
// }


const weatherApi = WEATHER_API.injectEndpoints({
  endpoints: (build) => ({
    getWeather: build.query({
      query: (location) => `${location}`,
    }),
  }),
  overrideExisting: true,
});


export const { useLazyGetWeatherQuery } = weatherApi;