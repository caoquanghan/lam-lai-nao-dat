import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface NotifyItemProps {
  textStyles?: StyleProp<TextStyle>;
  title: String,
  detail: String,
  time: String
}