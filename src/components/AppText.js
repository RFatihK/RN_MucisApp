import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

const AppText = ({ text, customStyles }) => {
  return <Text style={[styles.text, customStyles]}>{text}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});
