import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface TreeItemProps {
  textStyles?: StyleProp<TextStyle>;
  treeName: String;
  model: String;
  timeOn: String;
}
export interface treeProps {
  id: string,
  name: string,
  model: any,
}
