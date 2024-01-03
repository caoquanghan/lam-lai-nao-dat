import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";
import bg1 from "../../../assets/bg/pic1Splash.png";
import bg2 from "../../../assets/bg/pic2Splash.png";
import RegularText from "@/Components/texts/RegularText";
import SmallText from "@/Components/texts/SmallText";
import TextButton from "@/Components/button/TextButton";
import BigText from "@/Components/texts/BigText";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RootScreens } from "..";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
const SplashScreenContainer = styled(Container)`
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const TopImage = styled.Image`
  width: 100%;
  height: 60%;
  resize-mode: stretch;
`;
const Circle = styled.View`
  border-radius: 50%;
  width: 16px;
  aspect-ratio: 1;
  background-color: ${colors.gray};
`;
const BottomContainer = styled.View`
  width: 100%;
  padding: 29px;
  flex: 1;
  justify-content: flex-start;
`;
const SmallContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 72px;
  margin-top: 36px;
`;
const BigContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 36px;
`;
const SplashScreen: FunctionComponent = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
      <SplashScreenContainer>
        <TopImage source={bg1} />
        <BottomContainer>
          <BigText textStyles={{ width: "100%" }}>01.</BigText>
          <BigText textStyles={{ width: "100%" }}>Tưới tiêu thông minh</BigText>
          <SmallContainer></SmallContainer>
          <SmallText
            textStyles={{ width: "100%", fontSize: 20, fontWeight: "200" }}
          >
            Phân tích và đưa ra các giải pháp tối ưu
          </SmallText>

          <BigContainer>
            <SmallContainer>
              <Circle></Circle>
              <Circle></Circle>
              <Circle></Circle>
            </SmallContainer>
            <TextButton
              onPress={() => {
                navigation.navigate(RootScreens.LOGIN);
              }}
              btnStyles={{
                alignSelf: "flex-end",
                backgroundColor: `${colors.tranparent}`,
                width: "20%",
              }}
              textStyles={{ fontSize: 25, fontWeight: "400" }}
            >
              Tiếp
            </TextButton>
          </BigContainer>
        </BottomContainer>
      </SplashScreenContainer>
    </>
  );
};
export default SplashScreen;
