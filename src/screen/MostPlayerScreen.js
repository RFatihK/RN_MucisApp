import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import SongList from "../components/SongList";
import { songs } from "../data/songs";

const MostPlayerScreen = () => {
  return (
    <Screen>
      <AppHeader title={"Most Played Songs"} searcIcon />
      <View style={styles.container}>
        <SongList songs={songs} />
      </View>
    </Screen>
  );
};

export default MostPlayerScreen;

const styles = StyleSheet.create({});
