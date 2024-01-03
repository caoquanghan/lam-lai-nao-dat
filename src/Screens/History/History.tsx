import { i18n, LocalizationKey } from "@/Localization";
import React, {useEffect, useState} from "react";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons} from "@expo/vector-icons";
import { SectionList, View, Text, StyleSheet, Pressable, Dimensions} from "react-native";
import { StatusBar } from "expo-status-bar";
import { RootScreens } from "..";
import {FontSize, Colors} from "@/Theme"
import {HistoryScreenNavigatorProps} from "./HistoryContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDetail from "@/Components/header"

const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 375;

export interface IHistoryProps {
    navigation: HistoryScreenNavigatorProps;
}

export const History = (props: {
  onNavigate: (string: RootScreens) => void;
  }) => {
    const DATA = [
      {
        day: '27.10.2023',
        data: [
          {
              model: 'Năng suất',
              waterAmount: '02 lít',
              lengthTime: '10 phút',
              time: '08:20',
          },
        ],
      },
    ];

    let bool = false;
    let checked = DATA.slice(0,2);
    const [data, setData] = useState(checked);
    const [buttonState, setButtonState] = useState(true);
    // const [scroll, setScroll] = useState(true);

    const changeData = (change: any) => {
      setData(change);
    }
    
    const changeState = () => {
      setButtonState(!buttonState);
    }

    // const changeScroll = () => {
    //   setScroll(!scroll);
    // }

  return(
    <SafeAreaView style={{backgroundColor: Colors.AVT_BACKGROUND,}}>
      <StatusBar style="auto" />
      <HeaderDetail></HeaderDetail>
      <View style={styles.body}>
        <View style={styles.leftNavigation}>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.MODEL)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="seedling" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle}/>
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Mô hình</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.SCHEDULE)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="list-ul" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Lịch trình</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.WEATHER)} style={styles.activePress}>
              <View style={styles.cycle}>
                <AntDesign name="cloudo" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Thời tiết</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.active}>
            <Pressable onPress={() => props.onNavigate(RootScreens.HISTORY)} style={styles.activePress}>
              <View style={styles.activeCycle}>
                <FontAwesome5 name="history" size={20} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.activeContent}>Lịch sử</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.info}>
            <View style={styles.historyList}>
                <View style={styles.historyInfo}>
                    <View style={styles.historyInfoItem}>
                        <Text style={styles.historyInfoContent}>Mô hình</Text>
                    </View>
                    <View style={styles.historyInfoItem}>
                        <Text style={styles.historyInfoContent}>Lượng nước</Text>
                    </View>
                    <View style={styles.historyInfoItem}>
                        <Text style={styles.historyInfoContent}>Thời lượng</Text>
                    </View>
                    <View style={styles.historyInfoItem}>
                        <Text style={styles.historyInfoContent}>Thời gian</Text>
                    </View>
                </View>
                <SectionList
                    sections={data}
                    extraData={bool}
                    scrollEnabled={true}
                    renderItem={({item}) => (
                      <View style={styles.historyInfoList}>
                          <View style={styles.historyInfoItem}>
                              <Text style={styles.historyInfoContent}>{item.model}</Text>
                          </View>
                          <View style={styles.historyInfoItem}>
                              <Text style={styles.historyInfoContent}>{item.waterAmount}</Text>
                          </View>
                          <View style={styles.historyInfoItem}>
                              <Text style={styles.historyInfoContent}>{item.lengthTime}</Text>
                          </View>
                          <View style={styles.historyInfoItem}>
                              <Text style={styles.historyInfoContent}>{item.time}</Text>
                          </View>
                      </View>
                    )}
                    ListEmptyComponent={
                      <View style={{alignSelf: 'center', left: '-5%'}}>
                        <Text style={styles.semiTitle}>Không có dữ liệu</Text>
                      </View>
                    }
                    renderSectionHeader={({section: {day}}) => (
                      <View style={{paddingLeft: '2%', paddingTop: '2%', backgroundColor: Colors.AVT_BACKGROUND,}}>
                        <Text style={styles.regularText}>{day}</Text>
                      </View>
                    )}
                />
                {buttonState? 
                <View>
                  <Pressable style={styles.activePress} onPress={() => {changeData(DATA); changeState(); bool = true;}}>
                    <View style={styles.moreButton}>
                      <Text style={styles.regularText}>Xem thêm</Text>
                    </View>
                  </Pressable>
                </View>
                :
                <></>
                }
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    header: {
        height: '50%',
        backgroundColor: Colors.AVT_BACKGROUND,
    },

    headerBar: {
        height: '5%',
        width: '100%',
        backgroundColor: Colors.AVT_BACKGROUND,
        justifyContent: 'flex-end',
        marginBottom: '10%',
    },

    headerBarTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
    },

    avt:{
        bottom: '-10%',
        right: '5%', 
        position: 'absolute',
    },

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
        // left: 25,
        // marginBottom: 15,
        // marginTop: 15,
    },

    semiTitle: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.SEMI_TITLE, 
        fontWeight: '500',
        left: '5%',
        marginTop: '5%',
    },

    normalText: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TINY, 
        fontWeight: '400',
        left: 25,
        marginBottom: 15,
    },

    regularText: {
      color: Colors.BOLD_BUTTON, 
      fontSize: 17 * screenScale, 
      fontWeight: '500',
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
        height: '95%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    dateInfo: {
        flexDirection: 'row',
        height: '15%',
        width: '90%',
        justifyContent: 'space-between',
    },

    date: {
      width: '45%',
      height: '100%',
      top: '5%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    datePicker:{
      backgroundColor: Colors.NORMAL_BACKGROUND,
      height: '50%',
      width: '100%',
      borderRadius: 15,
    },

    datePickerPress: {
      alignSelf: 'center',
      top: '15%',
    },

    historyList: {
      backgroundColor: Colors.AVT_BACKGROUND,
      width: '90%',
      height: '100%',
      borderRadius: 15,
      top: '5%',
    },

    historyInfo: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: '2%',
        backgroundColor: Colors.AVT_BACKGROUND,
    },

    historyInfoList: {
        width: '100%',
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },

    historyInfoItem: {
        width: '20%',
        height: '100%',
    },

    historyInfoContent: {
      color: Colors.BOLD_BUTTON, 
      fontSize: 16 * screenScale, 
      fontWeight: '500',
    },

    moreButton: {
      backgroundColor: '#d9d9d9',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: '10%',
      paddingRight: '10%',
      borderRadius: 15,
    },
});
