import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3b71f3",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#3b71f3",
  },
  container_SECONDARY: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#3b71f3",
  },
  container_TERTIARY: {
    backgroundColor: "none",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_SECONDARY: {
    fontWeight: "bold",
    color: "#3b71f3",
  },
  text_TERTIARY: {
    color: "gray",
  },
});

export default CustomButton;
