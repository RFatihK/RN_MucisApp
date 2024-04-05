import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LibraryFlatlist from "../components/LibraryFlatlist";
import { libraryData } from "../data/libraryData";

const Artists = () => {
  return (
    <View style={{ flex: 1 }}>
      <LibraryFlatlist data={libraryData} />
    </View>
  );
};

export default Artists;

const styles = StyleSheet.create({});
