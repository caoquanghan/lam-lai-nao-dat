import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import { ButtonProps } from "./types";
import BigText from "../texts/BigText";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.tranparent};
  width: 100%;
  border-radius: 20px;
  padding: 4px;
`;

const TextButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView style={props.btnStyles as any} onPress={props.onPress as any}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  );
};
export default TextButton;
