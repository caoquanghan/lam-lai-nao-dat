const WEATHER_API_KEY = 'c724fc349fc740958c1155602230611';
import { v4 } from "uuid";
export const Config = {
  API_URL: "http://hpcc.hcmut.edu.vn:23003/",
  WEATHER_API_URL: "https://api.weatherapi.com/v1/forecast.json?key=c724fc349fc740958c1155602230611&lang=vi&days=7&q=",
};
// export const AUTH_LOGGING_IN = '[AUTH] LOGGING_IN';
// export const AUTH_LOGGING_OUT = '[AUTH] AUTH_LOGGING_OUT';
// export const AUTH_LOGGED_IN = '[AUTH] LOGGED_IN';
// export const AUTH_ERR_LOG_IN = '[AUTH] ERR_LOG_IN';
// export const AUTH_ERR_LOG_OUT = '[AUTH] AUTH_ERR_LOG_OUT';
// export const AUTH_LOGOUT = '[AUTH] LOGOUT';
export const FarmListJson = [{
  id: v4(),
  name: 'Cây xoài Đồng Tháp',
  date: '22/08/2023',
  model: {
    id: 1,
    name: 'Năng suất'
  },
  timeOn: '7:00:00',
  plant: 'Cây xoài',
  acraege: '100',
  location: 'Đồng Nai',
  sche: [
    {
      id: v4(),
      waterHour: '07:00',
      waterTime: '10:00',
      water: '500',
    },
    {
      id: v4(),
      waterHour: '08:00',
      waterTime: '12:00',
      water: '700',
    }
  ],
}];

export const scenario = [
    {
      sche: [
        {
          waterHour: '07:00',
          waterTime: '10:00',
          water: '500',
        },
        {
          waterHour: '08:00',
          waterTime: '12:00',
          water: '700',
        }
      ]
    },
    {
      sche: [
        {
          waterHour: '07:00',
          waterTime: '10:00',
          water: '500',
        },
        {
          waterHour: '08:00',
          waterTime: '12:00',
          water: '700',
        }
      ]
    },
  ]