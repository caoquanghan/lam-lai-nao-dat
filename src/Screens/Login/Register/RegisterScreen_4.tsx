import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../..//../Components/shared";
import { colors } from "../../../Components/colors";
import bg from "../../../../assets/bg/loginbg.png";
import logo from "../../../../assets//bg/logocay.png";
import RegularText from "@/Components/texts/RegularText";
import BigText from "@/Components/texts/BigText";
import { View } from "react-native";
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
  margin-vertical: 4px;
`;

const RegisterScreen04: FunctionComponent = () => {
  const navigaiton =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <RegisterLoginContainer>
      <BackgroundImage source={bg}>
        <SubContainer>
          <LogoContainer source={logo}></LogoContainer>
          <View style={{ marginBottom: 150, alignItems: "center", padding:10 }}>
            <BigText textStyles={{ color: colors.white, fontWeight: "600",fontSize:32, textAlign:'center' }}>
              Chúc mừng bạn đã đăng kí tài khoản thành công
            </BigText>
          </View>
          <View style={{width:'100%', paddingHorizontal:50, marginTop: 30}}>
            <RegularButton
              btnStyles={{ marginTop: 10 }}
              onPress={() => {
                navigaiton.navigate(RootScreens.LOGIN);
              }}
            >
              <RegularText
                textStyles={{
                  fontWeight: "700",
                  fontSize: 20,
                  color: colors.white,
                }}
              >
                Đăng nhập ngay
              </RegularText>
            </RegularButton>
          </View>
        </SubContainer>
      </BackgroundImage>
    </RegisterLoginContainer>
  );
};
export default RegisterScreen04;
