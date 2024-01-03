import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../..//../Components/shared";
import { colors } from "../../../Components/colors";
import bg from "../../../../assets/bg/loginbg.png";
import logo from "../../../../assets//bg/logocay.png";
import RegularText from "@/Components/texts/RegularText";
import BigText from "@/Components/texts/BigText";
import { Pressable, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RegularButton from "@/Components/button/RegularButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootScreens } from "@/Screens";
const RegisterLoginContainer = styled.View`
  width: 100%;
  height: 100%;
`;
const BackgroundImage = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  width: 100%;
  resize-mode: contain;
  flex-direction: column;
  flex: 1;
`;
const LogoContainer = styled.Image`
  resize-mode: contain;
  background-color: ${colors.tranparent};
  margin-bottom: 10px;
`;
const SubContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  height: 70%;
`;
const InputDivContainer = styled.View`
  height: 60px;
  background-color: ${colors.lightgray};
  margin-horizontal: 13px;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  width: 90%;
`;
const Circle = styled.View`
  border-radius: 50%;
  width: 16px;
  aspect-ratio: 1;
  background-color: ${colors.tranparent};
  border: 2px solid #416D50
`;
const RegisterScreen01: FunctionComponent = () => {
  const navigaiton =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <RegisterLoginContainer>
      <BackgroundImage source={bg}>
        <SubContainer>
          <LogoContainer source={logo}></LogoContainer>
          <View style={{ marginBottom: 150, alignItems: "center" }}>
            <BigText textStyles={{ color: colors.white, fontWeight: "600" }}>
              Bắt đầu với SMART
            </BigText>
            <RegularText
              textStyles={{ color: colors.white, fontWeight: "600" }}
            >
              Nhập Email/Số điện thoại để nhận mã xác nhận
            </RegularText>
          </View>
          <InputDivContainer>
            <Ionicons
              name="md-phone-portrait-outline"
              size={24}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <TextInput placeholder="Số điện thoại"></TextInput>
          </InputDivContainer>
          <View style={{width:'100%', paddingHorizontal:20, marginTop: 30}}>
            <RegularButton
              btnStyles={{ marginTop: 10 }}
              onPress={() => {
                navigaiton.navigate(RootScreens.REGISTER2);
              }}
            >
              <RegularText
                textStyles={{
                  fontWeight: "700",
                  fontSize: 20,
                  color: colors.white,
                }}
              >
                Nhận mã xác nhận
              </RegularText>
            </RegularButton>
          </View>
          <View style={{marginTop:20}}>
            <Pressable onPress={()=>{navigaiton.navigate(RootScreens.LOGIN)}}>
                <RegularText textStyles={{color:colors.white, fontSize:16}}>
                    Đã có tài khoản ? Đăng nhập
                </RegularText>
            </Pressable>
          </View>
          <View style={{width:100, marginTop:10, display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <Circle style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Circle style={{margin:'auto', width:7, backgroundColor:'#416D50' }}></Circle>
            </Circle>
            <Circle></Circle>
            <Circle></Circle>
          </View>
        </SubContainer>
      </BackgroundImage>
    </RegisterLoginContainer>
  );
};
export default RegisterScreen01;
