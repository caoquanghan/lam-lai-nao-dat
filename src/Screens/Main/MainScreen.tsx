import React, { FunctionComponent, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";

import RegularText from "@/Components/texts/RegularText";
import BigText from "@/Components/texts/BigText";
import { Pressable, SafeAreaView } from "react-native";
import logo from "../../../assets//bg/logocay.png";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import TreeItem from "@/Components/item/TreeItem";
import RegularButton from "@/Components/button/RegularButton";
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import { Farm, useLazyGetFarmListQuery } from "@/Services";
import { updateFarmList } from "@/Store/reducers/farm";
const MainScreenContainer = styled.View`
  background-color: ${colors.white};
  flex: 1;
  height: 100%;
`;
const Header = styled.View`
  width: 100%;
  height: 50px;
  top: 0;
  flex-direction: row;
  align-items: center;
  margin: 18px;
`;
const LogoContainer = styled.Image`
  width: 9%;
  resize-mode: contain;
`;
const InputContainer = styled.View`
  height: 46px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #435b71;
`;
const ItemContainer = styled.ScrollView`
  height: 110%;
  width: 100%;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const MainScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] = useLazyGetFarmListQuery();
  const farmlist = useSelector((state) => state.farm.farmlist);
  const handleFetch = async () => {
    await fetchOne();
  }
  useEffect(() => {
    handleFetch();
    if (isSuccess) {
      dispatch(updateFarmList(data));
    }
  }, [isSuccess]);

  console.log(data);

  if(isFetching){
    return <View></View>
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: `${colors.white}`,
        flex: 1,
      }}
    >
      <MainScreenContainer>
        <Header>
          <LogoContainer source={logo}></LogoContainer>
          <BigText
            textStyles={{
              fontSize: 25,
              marginStart: 5,
              fontWeight: "300",
              color: "#0D986A",
            }}
          >
            FARM GURU
          </BigText>
          {/* <SimpleLineIcons
            name="list"
            size={24}
            color="black"
            style={{ position: "absolute", right: 30 }}
          /> */}
        </Header>
        <InputContainer style={{ marginHorizontal: 15, padding: 6 }}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            placeholder="Tìm kiếm"
            style={{ width: 100, flexGrow: 1, marginLeft: 10 }}
          ></TextInput>
        </InputContainer>
        <Pressable onPress={()=>{navigation.navigate(RootScreens.ADDFARM)}} style={{alignSelf:'flex-end',padding: 4, marginHorizontal:10, marginTop: 7, borderRadius:10,backgroundColor:colors.lightgray, width: 150, height: 40, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <AntDesign name="pluscircle" size={18} color={colors.primary} />
            <RegularText textStyles={{textAlign:'center', marginHorizontal:5}}>
              Thêm nông trại
            </RegularText>
        </Pressable>

        <ItemContainer>
        {farmlist && isSuccess ? (
        farmlist.map((item: Farm, index: number) => (
              <TreeItem key={index} 
              id = {item.id}                 
              name={item.name || ""}
              model={item.model || ""}/>
              ))
        ) : (
          <View></View>
          )}
            </ItemContainer>
      </MainScreenContainer>
    </SafeAreaView>
  );
};
export default MainScreen;
