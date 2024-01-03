import { Schedule} from "./Schedule";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

export type ScheduleScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.SCHEDULE
  >;
  
export const ScheduleContainer = ({navigation}:ScheduleScreenNavigatorProps) => {
  
  const onNavigate = (screen: RootScreens) => {
    navigation.replace(screen);
  };


  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyGetUserQuery();

  // useEffect(() => {
  //   fetchOne(userId);
  // }, [fetchOne, userId]);

  // return <Home data={data} isLoading={isLoading} />;
  return <Schedule onNavigate={onNavigate}/>;
};
