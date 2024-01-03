import { i18n, LocalizationKey } from "@/Localization";
import React , {useEffect, useState} from "react";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons} from "@expo/vector-icons";
import { View, Text, StyleSheet, Image,  Dimensions, ScrollView, Modal, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RootScreens } from "..";
import {FontSize, Colors} from "@/Theme"
import {ModelScreenNavigatorProps} from "./ModelContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDetail from "@/Components/header";
import { useDispatch, useSelector } from "react-redux";
import {  updateModel } from "@/Store/reducers/farm";
import { useLazyGetModelQuery, useUpdateFarmMutation } from "@/Services";

const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 375;

export interface ModelProps {
    navigation: ModelScreenNavigatorProps;
}

export const Model= (props: {
    onNavigate: (string: RootScreens) => void;
  }) => {
    // const [modelstatus, setModelStatus] = useState(1);
    const [upModelReq,result] = useUpdateFarmMutation();
    const [isConfirmationVisible, setConfirmationVisible] = useState(false); //Confirm delete UI
    const curFarm = useSelector((state) => state.farm.selectedFarm);
    const [curModel, setCurModel] = useState({});
    const activeModelId = useSelector((state) => state.farm.selectedFarm.model.id);
    // const curActiveModelId = useSelector((state) => state.farm.curModelId);
    const dispatch = useDispatch();
    const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] = useLazyGetModelQuery();
    const handleFetch = async () => {
      await fetchOne();
    }
    useEffect(() => {
      handleFetch();
    }, [isSuccess]);
  
    console.log(data);
  
    if(isFetching){
      return <View></View>
    }
  
    //Handle delete water schdule
    const handlePress = (item: any)  => {
      setConfirmationVisible(true);
      setCurModel(item);
    };
    const handleUpdateModel = async () => {
      const id= curFarm.id;
      const model= curModel.id;
      await upModelReq(id,
        model).unwrap( );
      if(result.data){
        dispatch(updateModel(curModel))
        console.log(result.data);
      }
    }
    const handleConfirm= async () => {
      // Handle confirmation delete water schedule logic here
      setConfirmationVisible(false);
      handleUpdateModel();
      dispatch(updateModel({curModel}));
    };
  
    const handleCancel = () => {
      // Handle cancellation delete water schedule logic here
      setConfirmationVisible(false);
    };
    // const data = [
    //   {
    //     id: 1,
    //     name: 'Năng suất',
    //     source: 'Nhà cung cấp',
    //     des: 'Sử dụng lượng nước phù hợp để tạo ra năng suất tối ưu',
    //   },
    //   {
    //     id: 2,
    //     name: 'Cân bằng',
    //     source: 'Nhà cung cấp',
    //     des: ' Sử dụng lượng nước vừa đủ để tạo ra năng suất vừa đủ',
    //   },
    //   {
    //     id: 3,
    //     name: 'Tiết kiệm',
    //     source: 'Nhà cung cấp',
    //     des: 'Sử dụng lượng nước tiết kiệm, vẫn đảm bảo cây phát triển',
    //   }
    // ];
    
  return(
    <SafeAreaView style={{backgroundColor: Colors.AVT_BACKGROUND,}}>
      <StatusBar style="auto" />
      <HeaderDetail></HeaderDetail>
      <View style={styles.body}>
        <View style={styles.leftNavigation}>
          <View style={styles.active}>
            <Pressable onPress={() => props.onNavigate(RootScreens.MODEL)} style={styles.activePress}>
              <View style={styles.activeCycle}>
                <FontAwesome5 name="seedling" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle}/>
              </View>
              <View style={styles.intro}>
                <Text style={styles.activeContent}>Mô hình</Text>
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
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.HISTORY)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="history" size={20} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Lịch sử</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.info}>
          <ScrollView style={styles.scrollView}>
          {data && isSuccess ? (data.map((item, index) => (
              <Pressable  key={index}  onPress={()=>{handlePress(item);}}>
              <View style={{ flexDirection: 'row' }}>
                {
                item.id === activeModelId?
                  (
                    <View style={styles.dataItemActive}>
                      <Text >
                        Mô hình {item.name}
                      </Text>
                      <Text>
                        Nguồn: {item.description}
                      </Text>
                      <Text>
                        Mô tả: {item.provider}
                      </Text>
                    </View>
                  ):(
                    <View style={styles.dataItemInactive}>
                      <Text >
                        Mô hình {item.name}
                      </Text>
                      <Text>
                        Nguồn: {item.description}
                      </Text>
                      <Text>
                        Mô tả: {item.provider}
                      </Text>
                  </View>
                  )
                
                }
              </View>
              </Pressable>
              ))) : (
                <View></View>
              )}
          <Modal
            transparent={true}
            visible={isConfirmationVisible}
            animationType="slide"
          >
            <View style={styles.confirmUI}>
              <Text style={styles.confirmTitle}>Chọn mô hình này?</Text>
              <View style={{
                flexDirection: 'row', paddingHorizontal: 30,
                justifyContent: 'space-between'
              }}>
                <Pressable style={styles.confirmButton} onPress={handleConfirm}>
                  <Text style={styles.buttonText}>Chọn</Text>
                </Pressable>
                <Pressable style={styles.cancelButton} onPress={handleCancel}>
                  <Text style={styles.buttonText}>Hủy</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          </ScrollView>
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
  scrollView: {
    width: '90%',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 15,
  },
  dataItemActive: {
    // backgroundColor: '#E9F3ED',
    backgroundColor: Colors.BOLD_BACKGROUND,
    'flex': 1,
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  dataItemInactive: {
    backgroundColor: '#E9F3ED',
    'flex': 1,
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#416D50',
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#B83535',
  },
  confirmTitle: {
    color: Colors.BOLD_BUTTON,
    fontSize: FontSize.TITLE,
    fontWeight: '500',
    marginBottom: 15,
    marginTop: 15,
    alignSelf: 'center',
  },
  confirmUI: {
    top: '40%',
    padding: 30,
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderRadius: 16
  },
});
