import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={20} height={18} viewBox="0 0 20 18" fill="none" {...props}>
      <Path
        d="M1 0h18a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm17 4.238l-7.928 7.1L2 4.216V16h16V4.238zM2.511 2l7.55 6.662L17.502 2H2.511z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgComponent;
