import { useLazyGetFarmListQuery } from "@/Services";
import MainScreen from "./MainScreen";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateFarmList } from "@/Store/reducers/farm";
import { View } from "native-base";
const MainScreenContainer = () => {
  // const dispatch = useDispatch();
  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  // useLazyGetFarmListQuery();
  // useEffect(() => {
  //   fetchOne();
  //   if (isSuccess) {
  //     dispatch(updateFarmList(data));
  //   }
  // }, [isSuccess]);
  // if(isFetching){
  //   return <View></View>
  // }
  return <MainScreen 
  // data={data} isSuccess={isSuccess} isLoading={isLoading} isFetching={isFetching} error={error} 
  ></MainScreen>;
};
export default MainScreenContainer;
