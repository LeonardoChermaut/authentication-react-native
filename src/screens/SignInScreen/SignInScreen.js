import React, { useState } from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "../../../assets/images/logo.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignInButtons from "../../components/SocialSignButtons/SocialSignInButtons";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn("Sign In");
  };
  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed");
  };

  const onSignUpPress = () => {
    console.warn("onSignUpPress");
  };
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomButton
        text="Forgot password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
      <SocialSignInButtons />
      <CustomButton
        text="Don't have an account? Create one"
        onPress={onSignUpPress}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { alignItems: "center", padding: 30 },
  logo: {
    width: 200,
    maxWidth: 200,

    maxHeight: 200,
  },
});
export default SignInScreen;
