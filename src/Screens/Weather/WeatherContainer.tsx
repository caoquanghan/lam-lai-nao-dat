import {Weather} from "./Weather";
import React, { useState, useEffect } from "react";
import { useLazyGetWeatherQuery } from "@/Services";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

export type WeatherScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WEATHER
  >;

export const WeatherContainer = ({navigation}:WeatherScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.replace(screen);
  };
  const [weather, setWeather] = useState("Ho%20Chi%20Minh");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  useLazyGetWeatherQuery();
  useEffect(() => {
    fetchOne(weather);
  }, [fetchOne, weather]);
  return <Weather data={data} onNavigate={onNavigate} isSuccess = {isSuccess}/>;
};