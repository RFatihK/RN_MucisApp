import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import SongList from "../components/SongList";
import { songs } from "../data/songs";

const FolderSongsScreen = () => {
  return (
    <Screen>
      <AppHeader title={"My Songs"} searcIcon />
      <View style={styles.container}>
        <SongList songs={songs} />
      </View>
    </Screen>
  );
};

export default FolderSongsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
