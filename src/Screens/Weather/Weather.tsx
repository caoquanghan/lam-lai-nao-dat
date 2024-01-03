import { i18n, LocalizationKey } from "@/Localization";
import React, {useEffect, useState} from "react";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons} from "@expo/vector-icons";
import { ActivityIndicator, FlatList, View, Text, StyleSheet, Image, Pressable, Dimensions} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, ScrollView } from "native-base";
import { RootScreens } from "..";
import {FontSize, Colors} from "@/Theme"
import {WeatherScreenNavigatorProps} from "./WeatherContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import {Root, useLazyGetWeatherQuery } from "@/Services";
import HeaderDetail from "@/Components/header";
import { ItemClick } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";
import { useSelector } from "react-redux";

const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 375;

let daysOfWeek:{ [index: number] : {day: string} } = {};
daysOfWeek[0] = {day: 'Chủ nhật'};
daysOfWeek[1] = {day: 'Thứ hai'};
daysOfWeek[2] = {day: 'Thứ ba'};
daysOfWeek[3] = {day: 'Thứ tư'};
daysOfWeek[4] = {day: 'Thứ năm'};
daysOfWeek[5] = {day: 'Thứ sáu'};
daysOfWeek[6] = {day: 'Thứ bảy'};

export interface IWeatherProps {
  data: Root | undefined;
  onNavigate: (string: RootScreens) => void;
  isSuccess:  boolean;
}

export const Weather = (props: IWeatherProps) => {
  const { data, onNavigate, isSuccess } = props;
  // var dataState = useSelector((state) => state.apiweather.data);
  // console.log(dataState);
  var moment = require('moment'); // require
  // moment().format(); 



  let currentWeather = {
    temp: data?.current.temp_c.toFixed(),
    condition: {
      text: data?.current.condition.text,
      icon: data?.current.condition.icon,
    },
    precip: data?.current.precip_mm,
    humidity: data?.current.humidity,
    localTime: data?.location.localtime,
  }

  let daysWeather = [];

  for (let i = 0; i < 3; i++) {
    let item = {
      max_temp: data?.forecast.forecastday[i].day.maxtemp_c.toFixed(),
      min_temp: data?.forecast.forecastday[i].day.mintemp_c.toFixed(),
      chance_of_rain: data?.forecast.forecastday[i].day.daily_chance_of_rain,
      icon: data?.forecast.forecastday[i].day.condition.icon,
    }
    if (i==0) {
      daysWeather.push({date: "Hôm nay", min_temp: item.min_temp, max_temp: item.max_temp, icon: item.icon, chance_of_rain: item.chance_of_rain})
    }
    else{
      daysWeather.push({date: daysOfWeek[(moment().day() + i) % 7].day, min_temp: item.min_temp, max_temp: item.max_temp, icon: item.icon, chance_of_rain: item.chance_of_rain })
    }
    // if (i == 0) {
    //   daysWeather.push(
    //     <View style={styles.daysWeatherItem}>
    //       <View style={styles.daysWeatherItemLeft}>
    //         <Text style={{color: Colors.BOLD_BUTTON}}>Hôm nay</Text>
    //         <Text style={{color: Colors.BOLD_BUTTON}}>{item.min_temp}&#176;/{item.max_temp}&#176;</Text>
    //       </View>
    //       <View style={styles.daysWeatherItemRight}>
    //         <Image source={{
    //           uri: `https:${item.icon}`
    //         }} style={{width: 30, height: 30,}} />
    //         <Text style={{color: Colors.BOLD_BUTTON}}>{item.chance_of_rain}% mưa</Text>
    //       </View>
    //     </View>
    //   );
    // } else {
    //   daysWeather.push(
        // <View style={styles.daysWeatherItem}>
        //   <View style={styles.daysWeatherItemLeft}>
        //     <Text style={{color: Colors.BOLD_BUTTON}}>{daysOfWeek[(moment().day() + i) % 7].day}</Text>
        //     <Text style={{color: Colors.BOLD_BUTTON}}>{item.min_temp}&#176;/{item.max_temp}&#176;</Text>
        //   </View>
        //   <View style={styles.daysWeatherItemRight}>
        //     <Image source={{
        //       uri: `https:${item.icon}`
        //     }} style={{width: 30, height: 30,}} />
        //     <Text style={{color: Colors.BOLD_BUTTON}}>{item.chance_of_rain}% mưa</Text>
        //   </View>
        // </View>
    //   );
    // }
  }

  let hoursWeather = [];
  let counter = 0;

  for (let i = 0; i < 24; i++) {
    // console.log(moment(currentWeather.localTime).hour());
    if ((moment(currentWeather.localTime).hour() + i) === 24) {counter++};
    let item = {
      hour: String(((moment(currentWeather.localTime).hour() + i) % 24)).padStart(2,'0') + ':00',
      icon: data?.forecast.forecastday[counter].hour[((moment(currentWeather.localTime).hour() + i) % 24)].condition.icon,
      temp: data?.forecast.forecastday[counter].hour[((moment(currentWeather.localTime).hour() + i) % 24)].temp_c.toFixed(),
      chance_of_rain: data?.forecast.forecastday[counter].hour[((moment(currentWeather.localTime).hour() + i) % 24)].chance_of_rain,
    }
    if (i==0) {
      hoursWeather.push({hour: "Bây giờ", icon: item.icon, temp: item.temp, chance_of_rain: item.chance_of_rain})
    }
    else{
      hoursWeather.push(item)
    }
    // if (i == 0) {
    //   hoursWeather.push(
    //     <View style={styles.hoursWeatherItem}>
    //       <Text style={{color: Colors.BOLD_BUTTON}}>Bây giờ</Text>
    //       <Image source={{
    //         uri: `https:${item.icon}`
    //       }} style={{width: 30, height: 30,}} />
    //       <Text style={{color: Colors.BOLD_BUTTON}}>{item.temp}&#176;</Text>
    //       <Text style={{color: Colors.BOLD_BUTTON}}>{item.chance_of_rain}% mưa</Text>
    //     </View>
    //   );
    // } else {
    //   hoursWeather.push(
    //     <View style={styles.hoursWeatherItem}>
    //       <Text style={{color: Colors.BOLD_BUTTON}}>{item.hour}</Text>
    //       <Image source={{
    //         uri: `https:${item.icon}`
    //       }} style={{width: 30, height: 30,}} />
    //       <Text style={{color: Colors.BOLD_BUTTON}}>{item.temp}&#176;</Text>
    //       <Text style={{color: Colors.BOLD_BUTTON}}>{item.chance_of_rain}% mưa</Text>
    //     </View>
    //   );
    // }
  }
  
  return(
    <SafeAreaView style={{backgroundColor: Colors.AVT_BACKGROUND,}}>
      <StatusBar style="auto" />
      <HeaderDetail></HeaderDetail>
      <View style={styles.body}>
      <View style={styles.leftNavigation}>
          <View style={styles.inactive}>
            <Pressable onPress={() => onNavigate(RootScreens.MODEL)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="seedling" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle}/>
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Mô hình</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => onNavigate(RootScreens.SCHEDULE)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="list-ul" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Lịch trình</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.active}>
            <Pressable onPress={() => onNavigate(RootScreens.WEATHER)} style={styles.activePress}>
              <View style={styles.activeCycle}>
                <AntDesign name="cloudo" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.activeContent}>Thời tiết</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => onNavigate(RootScreens.HISTORY)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="history" size={20} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Lịch sử</Text>
              </View>
            </Pressable>
          </View>
        </View>
        {isSuccess?
        <View style={styles.info}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.realTimeWeather}>
              <View style={styles.realTimeWeatherTop}>
                <View style={styles.realTimeWeatherIcon}>
                  <Image source={{
                    uri: `https:${currentWeather.condition.icon}`
                  }} style={{width: 80, height: 80,}} />
                </View>
                <View style={styles.realTimeWeatherInfo}>
                  <Text style={styles.realTempText}>{currentWeather.temp}&#176;</Text>
                  <Text style={styles.realTimeWeatherText}>{currentWeather.condition.text}</Text>
                </View>
              </View>
              <View style={styles.line}></View>
              <View style={styles.realTimeWeatherBottom}>
                <View style={styles.chanceOfRain}>
                  <Text style={styles.smallText}>Lượng mưa</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5,}}>
                    <Ionicons name='rainy-outline' size={23} color={Colors.BOLD_BUTTON} />
                    <View style={{marginLeft: 5,}}>
                      <Text style={styles.smallText}>{currentWeather.precip} mm</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.humidity}>
                  <Text style={styles.smallText}>Độ ẩm</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5,}}>
                    <Ionicons name='water-outline' size={23} color={Colors.BOLD_BUTTON} />
                    <View style={{marginLeft: 5,}}>
                      <Text style={styles.smallText}>{currentWeather.humidity} %</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.hoursWeather}>
              <Text style={styles.title}>Thời tiết theo giờ</Text>
              <ScrollView horizontal={true} style={styles.hoursScrollView}>
                {hoursWeather.map((value, index) =>{
                  return(
                      <View style={styles.hoursWeatherItem} key={index}>
                        <Text style={{color: Colors.BOLD_BUTTON}}>{value.hour}</Text>
                        <Image source={{
                          uri: `https:${value.icon}`
                        }} style={{width: 30, height: 30,}} />
                        <Text style={{color: Colors.BOLD_BUTTON}}>{value.temp}&#176;</Text>
                        <Text style={{color: Colors.BOLD_BUTTON}}>{value.chance_of_rain}% mưa</Text>
                      </View>
                  )
                })}
              </ScrollView>
            </View>
            <View style={styles.daysWeather}>
              <Text style={styles.title}>Thời tiết theo ngày</Text>
              <View style={styles.daysView}>
                {daysWeather.map((value, index) =>{
                  return (
                    <View style={styles.daysWeatherItem} key={index}>
                    <View style={styles.daysWeatherItemLeft}>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{value.date}</Text>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{value.min_temp}&#176;/{value.max_temp}&#176;</Text>
                    </View>
                    <View style={styles.daysWeatherItemRight}>
                      <Image source={{
                        uri: `https:${value.icon}`
                      }} style={{width: 30, height: 30,}} />
                      <Text style={{color: Colors.BOLD_BUTTON}}>{value.chance_of_rain}% mưa</Text>
                    </View>
                  </View>
                  )
                })}
              </View>
            </View>
          </ScrollView>
        </View> 
        : <View><Text> Đang cập nhật</Text></View>}
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    body:{
        height: '50%',
        flexDirection: 'row',
    },

    intro:{
        width: '100%',
    },

    large: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TITLE, 
        fontWeight: '500',
        left: 25,
        marginBottom: 15,
        marginTop: 15,
    },

    title: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TITLE, 
        fontWeight: '500',
    },

    normalText: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TINY, 
        fontWeight: '400',
        left: 25,
        marginBottom: 15,
    },

    leftNavigation:{
        width: '25%',
        height: '100%',
        backgroundColor: Colors.BOLD_BACKGROUND,
        flexDirection: 'column',
        borderRadius: 15,
    },
        
    active:{
        backgroundColor: Colors.AVT_BACKGROUND,
        height: '25%',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },   
        
    inactive:{
        height: '25%',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },    
        
    activePress:{
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    activeCycle: {
        width: 40, 
        height: 40,
        flexDirection: 'column',
        backgroundColor: Colors.AVT_BACKGROUND, 
        borderRadius: 9999, 
        borderWidth: 4,
        borderColor: Colors.BOLD_BUTTON,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
    },
        
    cycle:{
        width: 40, 
        height: 40,
        flexDirection: 'column',
        backgroundColor: Colors.AVT_BACKGROUND, 
        borderRadius: 9999, 
        borderWidth: 1,
        borderColor: Colors.BOLD_BACKGROUND,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
    },

    activeContent: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.SMALL, 
        fontWeight: '400',
        marginBottom: 10,
        alignSelf: 'center',
    },

    inactiveContent: {
        color: Colors.WHITE, 
        fontSize: FontSize.SMALL, 
        fontWeight: '400',
        marginBottom: 10,
        alignSelf: 'center',
    },

    iconStyle: {
        alignSelf: 'center',
    },

    info: {
        width: '75%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    semiTitle: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.SEMI_TITLE, 
        fontWeight: '500',
        left: '5%',
        marginTop: '5%',
    },

    smallText: {
      color: Colors.BOLD_BUTTON, 
      fontSize: 14 * screenScale, 
      fontWeight: '500',
    },

    scrollView: {
      backgroundColor: Colors.NORMAL_BACKGROUND,
      width: '90%',
      marginTop: '5%',
      marginBottom: '5%',
      borderRadius: 15,
    },

    realTimeWeather: {
      backgroundColor: Colors.AVT_BACKGROUND,
      margin: '5%',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: '3%',
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
    },

    realTimeWeatherTop: {
      flexDirection: 'row',
    },

    realTimeWeatherBottom: {
      flexDirection: 'row',
    },

    realTimeWeatherIcon: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    realTimeWeatherInfo: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    realTempText: {
      fontSize: 45 * screenScale,
      color: Colors.BOLD_BUTTON,
    },

    realTimeWeatherText: {
      color: Colors.BOLD_BUTTON, 
      fontSize: 20 * screenScale, 
      fontWeight: '500',
    },

    line: {
      backgroundColor: Colors.BOLD_BUTTON,
      width: '90%',
      height: 5,
      marginTop: '5%',
      marginBottom: '5%',
      borderRadius: 15,
    },

    chanceOfRain: {
      width: '50%',
      alignItems: 'center',
    },

    humidity: {
      width: '50%',
      alignItems: 'center',
    },

    hoursWeather: {
      backgroundColor: Colors.AVT_BACKGROUND,
      margin: '5%',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: '3%',
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
    },

    hoursScrollView: {
      flexDirection: 'row',
    },

    hoursWeatherItem: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: 5,
      margin: 15,
      marginLeft: 0,
      minWidth: 80,
    },

    daysWeather: {
      backgroundColor: Colors.AVT_BACKGROUND,
      margin: '5%',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: '3%',
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
    },

    daysView: {
      flexDirection: 'column',
      marginTop: 15,
    },

    daysWeatherItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: 5,
      marginBottom: 15,
    },
    daysWeatherItemLeft: {
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    daysWeatherItemRight: {
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
    },
});