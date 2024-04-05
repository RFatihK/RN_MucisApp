import { View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { globalStyles } from "../theme/globalStyle";
import AppSearchHeader from "../components/AppSearchHeader";
import SongList from "../components/SongList";
import { songs } from "../data/songs";

const SearchScreen = () => {
  return (
    <Screen>
      <AppSearchHeader title={"Search"} searchIcon />
      <View style={globalStyles.container}>
        <SongList songs={songs} />
      </View>
    </Screen>
  );
};

export default SearchScreen;
