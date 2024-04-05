import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import Card from "../components/Card";
import { folders } from "../data/folders";

const FolderScreen = ({ navigation }) => {
  return (
    <Screen>
      <AppHeader title={"Folders"} searcIcon />
      <View style={styles.container}>
        <FlatList
          data={folders}
          renderItem={({ item }) => (
            <Card
              {...item}
              type={"folder"}
              onPress={() => navigation.navigate("FolderSongs")}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </View>
    </Screen>
  );
};

export default FolderScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
