import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import AppHeader from "../components/AppHeader";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { colors } from "../theme/colors";
import LibraryFlatlist from "../components/LibraryFlatlist";
import { libraryData } from "../data/libraryData";
import Library from "../tabs/Library";
import Artists from "../tabs/Artists";
import Albums from "../tabs/Albums";
import Genres from "../tabs/Genres";

const renderScene = SceneMap({
  Library: Library,
  artists: Artists,
  albums: Albums,
  genres: Genres,
});

const LibraryScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "Library", title: "Library" },
    { key: "artists", title: "Artists" },
    { key: "albums", title: "Albums" },
    { key: "genres", title: "Genres" },
  ]);

  return (
    <Screen>
      <AppHeader title={"Library"} searcIcon />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.tabBar}
            indicatorContainerStyle={styles.tabBarIndicatorStyle}
          />
        )}
      />
    </Screen>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  tabBarIndicatorStyle: {
    backgroundColor: colors.primary,
  },
  tabBar: {
    backgroundColor: colors.white,
  },
});
