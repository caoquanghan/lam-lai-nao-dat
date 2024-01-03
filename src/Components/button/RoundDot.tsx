import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";

const Circle = styled.View`
  border-radius: 50%;
  background-color: ${colors.primary};
`;

const RoundedDot: FunctionComponent = () => {
  return <Circle></Circle>;
};
export default RoundedDot;
