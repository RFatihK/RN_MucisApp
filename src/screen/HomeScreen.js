import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { categories } from "../data/categories";
import { playlists } from "../data/playlist";
import AppHeader from "../components/AppHeader";
import { colors } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const handleCategoriesPress = (screenName) => {
    navigation.navigate(screenName);
  };
  const handlePlaylistPress = (item) => {
    if (item.title) {
      navigation.navigate("Playlist");
    } else {
      setShowModal(true);
    }
  };
  return (
    <Screen>
      <AppHeader primaryScreen title={"Music Player"} searchg />
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Card
              {...item}
              onPress={() => handleCategoriesPress(item.screenName)}
            />
          )}
          keyExtractor={(item) => item.title}
          numColumns={3}
          style={styles.flatlist}
        />
        <View style={styles.playlistSection}>
          <AppText text="Playlist" customStyles={styles.playlistSectionTitle} />
          <FlatList
            data={[...playlists, { iconName: "plus" }]}
            renderItem={({ item }) => (
              <Card
                {...item}
                type={"playlist"}
                onPress={() => handlePlaylistPress(item)}
              />
            )}
            keyExtractor={(item) => item.title}
            numColumns={3}
            style={styles.flatlist}
          />
        </View>
      </View>
      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        transparent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.form}>
              <Input placeholder={"Playlist Name"} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setShowModal(false)}
                >
                  <AppText text={"Cancel"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton}>
                  <AppText text={"Add"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  flatlist: {
    flex: 1,
  },
  form: {
    backgroundColor: colors.secondary,
    width: "80%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  textInput: {
    width: "80%",
    alignSelf: "center",
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalOverlay: {
    backgroundColor: colors.blackTransparent,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playlistSection: {
    flex: 2,
    width: "100%",
  },
  playlistSectionTitle: {
    fontSize: 20,
    fontWeight: "normal",
    marginLeft: 10,
  },
});
