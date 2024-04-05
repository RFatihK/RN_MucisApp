import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

const Card = ({ iconName, title, itemCount, type, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <MaterialCommunityIcons
        name={
          title && type == "playlist"
            ? "playlist-music"
            : title && type == "folder"
            ? "folder"
            : iconName
        }
        size={50}
        color={colors.white}
      />
      {title && <AppText text={title} customStyles={styles.title} />}
      {itemCount && (
        <AppText text={itemCount} customStyles={styles.itemCount} />
      )}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondary,
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 10,
  },
  itemCount: {
    position: "absolute",
    top: 5,
    right: 5,
    fontWeight: "normal",
    fontSize: 12,
  },
  title: {
    fontSize: 14,
  },
});
