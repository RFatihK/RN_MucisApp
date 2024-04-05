import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { colors } from "../theme/colors";
import AppText from "../components/AppText";
import Slider from "@react-native-community/slider";

const PlayerScreen = () => {
  return (
    <Screen>
      <AppHeader title={"Song Title"} playlistIcon />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.songInfo}>
        <View style={styles.songDetails}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart"
              color={colors.danger}
              size={40}
            />
          </TouchableOpacity>
          <View style={styles.songTitleAndArtist}>
            <AppText text={"Song title"} customStyles={styles.songTitle} />
            <AppText text={"Song artits"} customStyles={styles.songArtist} />
          </View>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            color={colors.white}
            size={40}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.songProgress}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor={colors.white}
        />
        <View style={styles.durations}>
          <AppText text={"00:45"} />
          <AppText text={"04:45"} />
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="shuffle-variant"
            color={colors.white}
            size={25}
          />
        </TouchableOpacity>
        <View style={styles.songControls}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="skip-previous"
              color={colors.white}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="play"
              color={colors.white}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="skip-next"
              color={colors.white}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="playlist-play"
            color={colors.white}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  imageContainer: {},
  image: {
    width: "80%",
    height: 300,
    alignSelf: "center",
    borderRadius: 20,
  },
  songInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  songDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  songTitleAndArtist: {
    marginLeft: 10,
  },
  songArtist: {
    fontWeight: "normal",
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "normal",
  },
  songProgress: {
    paddingHorizontal: 20,
  },
  slider: {},
  durations: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",                                       
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 30,
  },
  songControls: {
    flexDirection: "row",
    alignItems: "ncenter",
  },
});
