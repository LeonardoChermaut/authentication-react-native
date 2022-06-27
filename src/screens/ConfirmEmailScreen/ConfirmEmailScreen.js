import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignInButtons from "../../components/SocialSignButtons/SocialSignInButtons";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    console.warn("onRegister");
  };

  const onSignUpPress = () => {
    console.warn("onSignUpPress");
  };
  const onResendPress = () => {
    console.warn("onResend");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
          secureTextEntry
        />
        <CustomButton
          text="Register"
          onPress={onConfirmPressed}
          type="PRIMARY"
        />
        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign In"
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
export default ConfirmEmailScreen;
