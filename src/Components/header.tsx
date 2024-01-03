import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SectionList, View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Dimensions, Modal} from "react-native";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons, Feather} from "@expo/vector-icons";
import {FontSize, Colors} from "@/Theme"
import { RootScreens } from "../Screens/index";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { deleteFarm } from "@/Store/reducers/farm";
import { useDeleteFarmMutation, useLazyGetFarmQuery } from "@/Services";

const HeaderDetail = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const curFarm = useSelector((state) => state.farm.selectedFarm);
  console.log(curFarm);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false); //Confirm delete UI
  const [deleteFarmbyId, result] = useDeleteFarmMutation();
  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] = useLazyGetFarmQuery();
  // const handleFetch = async () => {
  //   await fetchOne(curFarmId);
  // }
  // useEffect(() => {
  //   handleFetch();
  // }, [isSuccess]);
  // if(isFetching){
  //   return <View></View>
  // }
  const handlePress = () => {
    setConfirmationVisible(true);
    console.log(setConfirmationVisible)
  };
  const handleConfirm = () => {
    // Handle confirmation delete water schedule logic here
    setConfirmationVisible(false);
    deleteFarmbyId(curFarm.id);
    dispatch(deleteFarm());
    navigation.navigate(RootScreens.HOME);
  };

  const handleCancel = () => {
    // Handle cancellation delete water schedule logic here
    setConfirmationVisible(false);
  };
  return (
    <View style={styles.header}>
      <View style={styles.headerBar}>
        <View style={styles.headerBarTitle}>
          <Pressable onPress={() => navigation.navigate(RootScreens.HOME)}>
            <FontAwesome5 name='chevron-left' size={30} color='black' style={{marginLeft: 15}}/>
          </Pressable>
          <TouchableOpacity style={styles.deleteBtn} onPress={handlePress}>
              <Feather name="trash-2" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.intro}>
        <View style={{left: 25, marginBottom: 15, marginTop: 15,}}>
          <Text style={styles.title}>{curFarm .name}</Text>
        </View>
        <View style={styles.farmInfo}>
          <View>
            {/* <Text style={styles.normalText}>Ngày trồng: {curFarm .date}</Text> */}
            <Text style={styles.normalText}>Địa chỉ: {curFarm .address}</Text>
          </View>
          <View>
            <Text style={styles.normalText}>Loại cây: {(curFarm .cultivars)? (curFarm .cultivars):''}</Text>
            {/* <Text style={styles.normalText}>Diện tích: {curFarm .area} m2</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.avt}>
        <Image source={ require("../../assets/tree.png")} style={{height: 230, width: 230}}/>
      </View>
      <Modal
            transparent={true}
            visible={isConfirmationVisible}
            animationType="slide"
          >
            <View style={styles.confirmUI}>
              <Text style={styles.confirmTitle}>Xóa nông trại này?</Text>
              <View style={{
                flexDirection: 'row', paddingHorizontal: 30,
                justifyContent: 'space-between'
              }}>
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                  <Text style={styles.buttonText}>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                  <Text style={styles.buttonText}>Hủy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
    </View>
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
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      top: 20,
  },

  avt:{
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
  },

  intro:{
    width: '100%',
  },

  title: {
    color: Colors.BOLD_BUTTON, 
    fontSize: FontSize.TITLE, 
    fontWeight: '500',
    // left: 25,
    // marginBottom: 15,
    // marginTop: 15,
  },

  normalText: {
    color: Colors.BOLD_BUTTON, 
    fontSize: FontSize.TINY, 
    fontWeight: '400',
    left: 25,
    marginBottom: 15,
  },

  farmInfo: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteBtn: {paddingLeft: 10, paddingBottom: 10, alignItems: 'flex-end', marginRight: 20
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

export default HeaderDetail;