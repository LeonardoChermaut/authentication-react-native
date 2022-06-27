import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");

  const onConfirmPressed = () => {
    console.warn("onRegister");
  };

  const onSignUpPress = () => {
    console.warn("onSignUpPress");
  };
  const onSendPress = () => {
    console.warn("onsend");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          secureTextEntry
        />
        <CustomButton text="Send" onPress={onConfirmPressed} type="PRIMARY" />
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
export default ForgotPasswordScreen;
