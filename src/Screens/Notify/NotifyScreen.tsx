import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";
import RegularText from "@/Components/texts/RegularText";
import { SafeAreaView, View } from "react-native";
import BigText from "@/Components/texts/BigText";
import logo from "../../../assets//bg/logocay.png";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "native-base";
import NotifyItem from "@/Components/item/NotifyItem/NotifyItem";

const NotifyCotainer = styled(Container)`
  justify-content: flex-start;
  height: 100%;
  flex: 1;
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
const Subcontainer = styled.ScrollView`
  width: 100%;
  
`
const NotfifyScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NotifyCotainer>
        <Header>
          <LogoContainer
            source={logo}
            style={{ marginLeft: 18 }}
          ></LogoContainer>
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
        </Header>
        <Subcontainer style={{display:'flex'}}>
          <RegularText textStyles={{marginLeft: 10, marginVertical:10, color: '#64748b'}}>
            Hôm nay
          </RegularText>
          <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <NotifyItem
              title={"Vườn Xoài"}
              detail={"Đã tưới xong"}
              time={"Lúc 8:10 Sáng"}
            ></NotifyItem>
            <NotifyItem
              title={"Vườn Xoài"}
              detail={"Chuẩn bị tưới trong 5 phút nữa"}
              time={"Lúc 7:55 Sáng"}
            ></NotifyItem>
          </View>
          <RegularText textStyles={{marginLeft: 10, marginVertical:10, color: '#64748b'}}>
            Hôm qua
          </RegularText>
          <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <NotifyItem
              title={"Vườn Xoài"}
              detail={"Đã tưới xong"}
              time={"Lúc 8:10 Sáng"}
            ></NotifyItem>
            <NotifyItem
              title={"Vườn Xoài"}
              detail={"Chuẩn bị tưới trong 5 phút nữa"}
              time={"Lúc 7:55 Sáng"}
            ></NotifyItem>
          </View>
        </Subcontainer>
      </NotifyCotainer>
    </SafeAreaView>
  );
};
export default NotfifyScreen;
