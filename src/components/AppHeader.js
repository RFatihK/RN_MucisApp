import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const AppHeader = ({ primaryScreen, title, searcIcon, playlistIcon }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (primaryScreen) {
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.header}>
      <View style={styles.mainContent}>
        <TouchableOpacity onPress={handlePress}>
          <MaterialCommunityIcons
            name={primaryScreen ? "menu" : "arrow-left"}
            color={colors.white}
            size={35}
          />
        </TouchableOpacity>
        <AppText text={title} customStyles={styles.title} />
      </View>
      <View style={styles.icon}>
        {searcIcon && (
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => navigation.navigate("Search")}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              color={colors.white}
            />
          </TouchableOpacity>
        )}
        {playlistIcon && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate("Playlist")}
          >
            <MaterialCommunityIcons
              name="playlist-music"
              size={30}
              color={colors.white}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    backgroundColor: colors.secondary,
    elevation: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
  },
  searchIcon: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  mainContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
});
