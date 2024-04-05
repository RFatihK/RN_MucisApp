import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

const Screen = ({ children, customStyles }) => {
  return <View style={[styles.container, customStyles]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
