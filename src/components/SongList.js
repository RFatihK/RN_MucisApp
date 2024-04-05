import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Song from "./Song";

const SongList = ({ songs, ...otherProps }) => {
  return (
    <FlatList
      data={songs}
      extraData={songs}
      renderItem={({ item }) => <Song {...item} />}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      {...otherProps}
    />
  );
};

export default SongList;

const styles = StyleSheet.create({});
