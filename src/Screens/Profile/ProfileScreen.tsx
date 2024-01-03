import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";
import SmallText from "@/Components/texts/SmallText";
import RegularText from "@/Components/texts/RegularText";
import BigText from "@/Components/texts/BigText";
import { Pressable, SafeAreaView, View } from "react-native";
import userImage from "../../../assets//bg/UserImage.png";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProfileScreenContainer = styled(Container)`
  width: 100%;
  flex: 1;
  background-color: #f9f9f9;
`;
const Header = styled.View`
  background-color: #416d50;
  width: 100%;
  height: 90px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 22px;
`;
const UserImageContainer = styled.Image`
  width: 15%;
  height: 72%;
  resize-mode: contain;
  margin: 15px 18px;
  border-radius: 50px;
`;
const Wrapper = styled.View``;
const SubContainer = styled.View`
  height: 80px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  margin-horizontal: 10px;
  padding: 5px;
`;
const Circle = styled.View`
  background-color: ${colors.lightgray};
  width: 45px;
  height: 45px;
  z-index: 1;
  border-radius: 22.5px;
  justify-content: center;
  align-items: center;
`;
const ProfileScreen: FunctionComponent = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const profile = useSelector((state) => state.profile);
  const handleLogout = async () => {
    // Remove the JWT from AsyncStorage
    await AsyncStorage.removeItem('token');
    // Navigate to the login page
    navigation.navigate(RootScreens.HOME);
  };
  console.log(profile);
  return (
    <SafeAreaView
      style={{ flex: 1, width: "100%", backgroundColor: "#F9F9F9" }}
    >
      <ProfileScreenContainer>
        <BigText
          textStyles={{
            width: "100%",
            marginTop: 40,
            textAlign: "left",
            marginLeft: 16,
            marginBottom: 13,
            color: "#181D27",
          }}
        >
          Trang cá nhân
        </BigText>
        <Header>
          <UserImageContainer source={userImage} />
          <View style={{ alignSelf: "center", marginRight: 10, width: '60%' }}>
          <RegularText
            textStyles={{
              color: `${colors.white}`,
              marginTop: 20,
              fontSize: 20,
            }}
          >
            {profile.name}
          </RegularText>
          </View>
          <FontAwesome
            name="pencil"
            size={28}
            color="white"
            style={{ alignSelf: "center", marginRight: 15 }}
            onPress={() => {
              navigation.navigate(RootScreens.UPDATEPROFILE);
            }}
          />
        </Header>
        <SubContainer
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Wrapper style={{ marginLeft: 10 }}>
            <Circle>
              <Feather name="user" size={24} color="black" />
            </Circle>
          </Wrapper>
          <Wrapper
            style={{
              flexGrow: 1,
              marginLeft: 20,
              justifyContent: "space-around",
              width: "30%",
            }}

          >
            <Pressable onPress={() => {navigation.navigate(RootScreens.UPDATEPROFILE);}}>
            <RegularText>Tài khoản của tôi</RegularText>
            <SmallText
              textStyles={{
                fontWeight: "200",
                color: `#ABABAB`,
              }}
            >
              Thay đổi thông tin tài khoản
            </SmallText>
            </Pressable>
          </Wrapper>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </SubContainer>
        <SubContainer
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Wrapper style={{ marginLeft: 10 }}>
            <Circle>
              <MaterialIcons
                name="logout"
                size={22}
                color="black"
                style={{ marginLeft: 4 }}
              />
            </Circle>
          </Wrapper>
          <Wrapper
            style={{
              flexGrow: 1,
              marginLeft: 20,
              justifyContent: "space-around",
              width: "30%",
            }}
          >
            <Pressable onPress={()=>{navigation.navigate(RootScreens.LOGIN)}}>
            <RegularText>Đăng xuất</RegularText>
            </Pressable>
          </Wrapper>
          {/* <MaterialIcons name="keyboard-arrow-right" size={24} color="black" /> */}
        </SubContainer>
        <RegularText
          textStyles={{
            alignSelf: "flex-start",
            marginLeft: 10,
            marginVertical: 30,
          }}
        >
          Thêm
        </RegularText>

        <SubContainer
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <Wrapper style={{ marginLeft: 10 }}>
            <Circle>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </Circle>
          </Wrapper>
          <Wrapper
            style={{
              flexGrow: 1,
              marginLeft: 20,
              justifyContent: "space-around",
              width: "30%",
            }}
          >
            <RegularText>Giúp đỡ và hỗ trợ</RegularText>
          </Wrapper>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </SubContainer>
        <SubContainer
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Wrapper style={{ marginLeft: 10 }}>
            <Circle>
              <AntDesign name="hearto" size={24} color="black" />
            </Circle>
          </Wrapper>
          <Wrapper
            style={{
              flexGrow: 1,
              marginLeft: 20,
              justifyContent: "space-around",
              width: "30%",
            }}
          >
            <RegularText>Về ứng dụng</RegularText>
          </Wrapper>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </SubContainer>
      </ProfileScreenContainer>
    </SafeAreaView>
  );
};
export default ProfileScreen;
