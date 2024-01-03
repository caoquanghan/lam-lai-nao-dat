import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
export type LoginScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.LOGIN
  >;
export const LoginScreenContainer = ({navigation}:LoginScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.replace(screen);
  };
  return <LoginScreen onNavigate={onNavigate} navigation= {navigation}/>;
};
