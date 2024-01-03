import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { Container } from "../..//../Components/shared";
import { colors } from "../../../Components/colors";
import bg from "../../../../assets/bg/loginbg.png";
import logo from "../../../../assets//bg/logocay.png";
import RegularText from "@/Components/texts/RegularText";
import BigText from "@/Components/texts/BigText";
import { Pressable, TextInput, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RegularButton from "@/Components/button/RegularButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootScreens } from "@/Screens";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from "native-base";
import { useRegisterUserMutation } from "@/Services/auth";
const RegisterLoginContainer = styled.View`
  width: 100%;
  height: 100%;
`;
const BackgroundImage = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  width: 100%;
  resize-mode: contain;
  flex-direction: column;
  flex: 1;
`;
const LogoContainer = styled.Image`
  resize-mode: contain;
  background-color: ${colors.tranparent};
  margin-bottom: 10px;
`;
const SubContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  height: 90%;
`;
const InputWrapper = styled.View`
    width: 90%;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const InputDivContainer = styled.View`
    height: 60px;
    background-color: ${colors.lightgray};
    margin-horizontal: 13px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    margin-vertical: 10px;
`;

const InputForm = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
const ErrorText = styled.Text`
    width: 100%;
    color: red;
    margin-top: 1px; /* Điều chỉnh khoảng cách từ trên xuống */
    marginLeft: 10px; /* Điều chỉnh khoảng cách từ trái */
`;

const RegisterScreen03: FunctionComponent = () => {
    const navigaiton =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [signup, signUpResult] = useRegisterUserMutation();
    const [username, setUsername] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [errorRepassword, setErrorRepassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");

    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

    const handleSignUp = async () => {
      try {
        // Kiểm tra điều kiện trước khi đăng ký
        if (errorEmail || errorUsername || errorPassword || errorRepassword || email == "" || username == "" || password == "" || repassword == "" ) {
          // Hiển thị popup thông báo lỗi
          setIsErrorModalVisible(true);
          return;
        }
  
        // Tiếp tục xử lý đăng ký nếu các trường hợp lệ
        const response = await signup({ email, username, password }).unwrap();
  
        console.log(response);
        if (response) {
          // Navigate to the home page
          navigaiton.navigate(RootScreens.REGISTER4);
        } else {
          // Handle login error
          console.error('Signup failed');
        }
      } catch (err) {
        // Handle any other errors
        console.error('An error occurred:', err);
      }
    };
    const handleUsernameChange = (e: string) => {
        setUsername(e);
        if (e.length < 6) {
            setErrorUsername("Tên đăng nhập phải có ít nhất 6 ký tự");
        } if(e.length == 0){
            setErrorUsername("Vui lòng nhập tên đăng nhập");
        }
        else {
            setErrorUsername("");
        }
    };
    const handlePasswordChange = (e: string) => {
        setPassword(e);
        if (e.length < 6) {
            setErrorPassword("Mật khẩu phải có ít nhất 6 ký tự");
        } if(e.length == 0){
            setErrorPassword("Vui lòng nhập mật khẩu");
        }else {
            setErrorPassword("");
        }
    };
    const handleRepasswordChange = (e: string) => {
        setRepassword(e);
        if (e != password) {
            setErrorRepassword("Mật khẩu không khớp");
        }if(e.length == 0){
            setErrorRepassword("Vui lòng nhập lại mật khẩu");
        } else {
            setErrorRepassword("");
        }
    };
    const handleEmailChange = (e: string) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(e.toLowerCase())) {
            setErrorEmail("");
        } if(e.length == 0){
            setErrorEmail("Vui lòng nhập email");
        }else {
            setErrorEmail("Email không hợp lệ");
        }
        setEmail(e);
    };
    return (

        <RegisterLoginContainer>
            <BackgroundImage source={bg}>
                <SubContainer>
                    <LogoContainer source={logo}></LogoContainer>
                    <View style={{ marginBottom: 50, alignItems: "center" }}>
                        <BigText textStyles={{ color: colors.white, fontWeight: "600" }}>
                            FARM GURU
                        </BigText>
                    </View>
                    <InputWrapper>
                        <InputDivContainer>
                            <InputForm>
                                <AntDesign name="mail" size={24} color="black" style={{ marginHorizontal: 10 }} />
                                <TextInput placeholder="Email"
                                    value={email}
                                    onChangeText={handleEmailChange}
                                    style={{ flexGrow: 1, padding: 10 }}
                                />
                            </InputForm>
                        </InputDivContainer>
                        {errorEmail !== "" && <ErrorText>{errorEmail}</ErrorText>}
                    </InputWrapper>
                    <InputWrapper>
                        <InputDivContainer>
                            <InputForm>
                                <AntDesign name="user" size={24} color="black" style={{ marginHorizontal: 10 }} />
                                <TextInput placeholder="Tên đăng nhập"
                                    value={username}
                                    onChangeText={(value) => { handleUsernameChange(value) }}
                                    style={{ flexGrow: 1, padding: 10 }}></TextInput>
                            </InputForm>
                        </InputDivContainer>
                        {errorUsername !== "" && <ErrorText>{errorUsername}</ErrorText>}
                    </InputWrapper>
                    <InputWrapper>
                        <InputDivContainer>
                            <InputForm>
                            <TextInput secureTextEntry={true} placeholder="Mật khẩu"
                                value={password}
                                onChangeText={(value) => { handlePasswordChange(value) }}
                                style={{ flexGrow: 1, padding: 10 }}></TextInput>
                                    
                            </InputForm>
                        </InputDivContainer>
                        {errorPassword !== "" && <ErrorText>{errorPassword}</ErrorText>}
                    </InputWrapper>
                    <InputWrapper>
                        <InputDivContainer>
                        <AntDesign name="lock" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        <TextInput secureTextEntry={true}
                            value={repassword}
                            onChangeText={(value) => { handleRepasswordChange(value) }}
                            placeholder="Xác nhận lại mật khẩu" style={{ flexGrow: 1, padding: 10 }}></TextInput>
                        </InputDivContainer>
                        {errorRepassword !== "" && <ErrorText>{errorRepassword}</ErrorText>}
                    </InputWrapper>
                    <View style={{ width: '100%', paddingHorizontal: 50, marginTop: 30 }}>
                        <RegularButton
                            btnStyles={{ marginTop: 10 }}
                            onPress={handleSignUp}
                        >
                            <RegularText
                                textStyles={{
                                    fontWeight: "700",
                                    fontSize: 20,
                                    color: colors.white,
                                }}
                            >
                                Tạo tài khoản
                            </RegularText>
                        </RegularButton>
                    </View>
                    <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                        <Pressable onPress={() => { navigaiton.navigate(RootScreens.LOGIN) }}>
                            <RegularText textStyles={{ color: colors.white, fontSize: 15, fontWeight: '600' }}>
                                Đã có tài khoản? Đăng nhập
                            </RegularText>
                        </Pressable>
                    </View>
                </SubContainer>
            </BackgroundImage>
            <Modal
        isVisible={isErrorModalVisible}
        onBackdropPress={() => setIsErrorModalVisible(false)}
      >
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Thông báo lỗi</Text>
          {errorEmail !== "" ||email == ""  && <ErrorText>{email == "" ? "Vui lòng nhập email" : errorEmail}</ErrorText>}
          {errorUsername !== "" || username =="" && <ErrorText>{username =="" ?"Vui lòng nhập tên tài khoản": errorUsername}</ErrorText>}
          {errorPassword !== ""  || password == "" && <ErrorText>{errorPassword =="" ?"Vui lòng nhập mật khẩu": errorPassword}</ErrorText>}
          {errorRepassword !== "" || repassword== "" && <ErrorText>{errorRepassword =="" ?"Vui lòng nhập lại mật khẩu": errorRepassword}</ErrorText>}
          <Pressable onPress={() => setIsErrorModalVisible(false)}>
            <Text style={{ color: 'blue', marginTop: 10 }}>Đóng</Text>
          </Pressable>
        </View>
      </Modal>
        </RegisterLoginContainer>
    );
};
export default RegisterScreen03;
