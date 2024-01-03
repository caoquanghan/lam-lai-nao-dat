import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreenContainer from "@/Screens/Main/MainScreenContainer";
import StatisticContainer from "@/Screens/Statics/StatisticContainer";
import NotifyCotainer from "@/Screens/Notify/NotifyContainer";
import ProfileScreenContainer from "@/Screens/Profile/ProfileScreenContainer";
import { colors } from "@/Components/colors";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import RegularText from "@/Components/texts/RegularText";
import MainScreen from "@/Screens/Main/MainScreen";
const Tab = createBottomTabNavigator();
// @refresh reset
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    postion: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,
  },
};
export const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Static"
        component={StatisticContainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Feather
                    name="home"
                    size={24}
                    color="black"
                    style={{ zIndex: 10 }}
                  />
                  {focused ? (
                    <View
                      style={{
                        backgroundColor: `${colors.primary}`,
                        width: 45,
                        height: 45,
                        position: "absolute",
                        zIndex: 1,
                        borderRadius: 50,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        backgroundColor: `${colors.tranparent}`,
                        width: "10%",
                        height: "10%",
                        position: "absolute",
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    position: "absolute",
                    bottom: -28,
                    alignSelf: "center",
                  }}
                >
                  {
                    focused ? (
                        <RegularText textStyles={{fontWeight:'700'}}>Trang chủ</RegularText>
                      ) : (
                        <RegularText >Trang chủ</RegularText>
                    )
                  }
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainScreenContainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Feather
                    name="list"
                    size={24}
                    color="black"
                    style={{ zIndex: 10 }}
                  />
                  {focused ? (
                    <View
                      style={{
                        backgroundColor: `${colors.primary}`,
                        width: 45,
                        height: 45,
                        position: "absolute",
                        zIndex: 1,
                        borderRadius: 50,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        backgroundColor: `${colors.tranparent}`,
                        width: "10%",
                        height: "10%",
                        position: "absolute",
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    position: "absolute",
                    bottom: -28,
                    alignSelf: "center",
                  }}
                >
                  {
                    focused ? (
                        <RegularText textStyles={{fontWeight:'700'}}>Nông trại</RegularText>
                      ) : (
                        <RegularText >Nông trại</RegularText>
                    )
                  }
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notify"
        component={NotifyCotainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="black"
                    style={{ zIndex: 10 }}
                  />
                  {focused ? (
                    <View
                      style={{
                        backgroundColor: `${colors.primary}`,
                        width: 45,
                        height: 45,
                        position: "absolute",
                        zIndex: 1,
                        borderRadius: 50,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        backgroundColor: `${colors.tranparent}`,
                        width: "10%",
                        height: "10%",
                        position: "absolute",
                        zIndex: 1,
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    position: "absolute",
                    bottom: -28,
                    alignSelf: "center",
                  }}
                >
                  {
                    focused ? (
                        <RegularText textStyles={{fontWeight:'700'}}>Thông báo</RegularText>
                      ) : (
                        <RegularText >Thông báo</RegularText>
                    )
                  }
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreenContainer}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <AntDesign
                    name="user"
                    size={24}
                    color="black"
                    style={{ zIndex: 10 }}
                  />
                  {focused ? (
                    <View
                      style={{
                        backgroundColor: `${colors.primary}`,
                        width: 45,
                        height: 45,
                        position: "absolute",
                        zIndex: 1,
                        borderRadius: 50,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        backgroundColor: `${colors.tranparent}`,
                        width: "10%",
                        height: "10%",
                        position: "absolute",
                        zIndex: 1,
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    position: "absolute",
                    bottom: -28,
                    alignSelf: "center",
                  }}
                >
                  {
                    focused ? (
                        <RegularText textStyles={{fontWeight:'700'}}>Tài khoản</RegularText>
                      ) : (
                        <RegularText >Tài khoản</RegularText>
                    )
                  }
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
