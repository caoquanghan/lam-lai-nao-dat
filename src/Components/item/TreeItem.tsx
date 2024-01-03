import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import { Container } from "../shared";
import { Ionicons } from "@expo/vector-icons";
import RegularText from "../texts/RegularText";
import plant1 from "../../../assets/tree.png";

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.lightgray};
  height: 120px;
  margin-horizontal: 10px;
  border-radius: 10px;
  margin-vertical: 9px;
`;
const DetailContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 10px;
`;
const ImageContainer = styled.Image`
  width: 100px;
  height: 150px;
  resize-mode: contain;
  margin-left: 10px;
`;
import { TreeItemProps, treeProps } from "./types";
import BigText from "../texts/BigText";
import { FontSize } from "@/Theme/Variables";
import { Pressable } from "react-native";
import { RootScreens } from "@/Screens";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { clickFarm } from "@/Store/reducers/farm";
const TreeItem = (  props: treeProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const { id, name, model } = props;
  return (
    <Pressable onPress={() => {dispatch(clickFarm(id));navigation.navigate(RootScreens.MODEL)}}>
      <ItemContainer>
        <ImageContainer source={plant1}></ImageContainer>
        <DetailContainer>
          <BigText textStyles={{ fontSize: 20, marginBottom: 10 }}>
            {name}
          </BigText>
          <RegularText textStyles={{ fontWeight: "200" }}>
            {"Mô hình : " + (model.name ? model.name : "Chưa có mô hình")}
          </RegularText>
          {/* <RegularText textStyles={{ fontWeight: "200" }}>
            {"Thời điểm tưới tiếp theo : " + timeOn}
          </RegularText> */}
        </DetailContainer>
      </ItemContainer>
    </Pressable>
  );
};
export default TreeItem;
