import { StyleSheet, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import SongList from "../components/SongList";
import { songs } from "../data/songs";

const PlayerListScreen = () => {
  return (
    <Screen>
      <AppHeader title={"New Playlist"} searchIcon />
      <View style={styles.container}>
        <SongList songs={songs} />
      </View>
    </Screen>
  );
};

export default PlayerListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
