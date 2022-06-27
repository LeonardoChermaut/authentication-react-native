import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmitPressed = () => {
    console.warn("onSubmit");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput placeholder="Code" value={code} setValue={setCode} />
        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} type="PRIMARY" />
        <CustomButton
          text="Back to Sign In"
          onPress={onSubmitPressed}
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
export default NewPasswordScreen;
