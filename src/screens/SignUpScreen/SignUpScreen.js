import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignInButtons from "../../components/SocialSignButtons/SocialSignInButtons";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const onRegisterPressed = () => {
    console.warn("Sign In");
  };
  const onTermsOfUsePressed = () => {
    console.warn("onForgotPassword");
  };

  const onSignUpPress = () => {
    console.warn("onSignUpPress");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacy");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton
          text="Register"
          onPress={onRegisterPressed}
          type="PRIMARY"
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            {" "}
            Terms of Use
          </Text>{" "}
          and
          <Text onPress={onPrivacyPressed}> Privacy Policy </Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign In"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { alignItems: "center", padding: 30 },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: { color: "gray" },
  marginVertical: 10,
  link: {
    color: "#FDB075",
  },
});
export default SignUpScreen;
