import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { useNavigation } from "@react-navigation/native";

const Song = ({ title, artist, duration, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Player")}
    >
      <View style={styles.songMainDetails}>
        <Image source={image} resizeMode="contain" style={styles.image} />
        <View style={styles.songInfo}>
          <AppText text={title} />
          <AppText text={artist} />
        </View>
      </View>
      <View>
        <AppText text={duration} />
      </View>
    </TouchableOpacity>
  );
  x;
};

export default Song;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  songMainDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 10,
  },
  songInfo: {
    justifyContent: "center",
  },
});
