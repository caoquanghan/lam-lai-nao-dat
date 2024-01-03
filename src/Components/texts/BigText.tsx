import React, { FunctionComponent } from "react";

import styled from "styled-components/native";

import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 35px;
  color: ${colors.black};
  text-align: left;
`;

import { TextProps } from "./types";

/* Receive 2 arguments and pass it into the function */
const BigText: FunctionComponent<TextProps> = (props) => {
  return (
    <StyledText style={props.textStyles as any}>{props.children}</StyledText>
  );
};
export default BigText;
