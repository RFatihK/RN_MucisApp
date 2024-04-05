import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Screen customStyles={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/icon.png")}
      />
      <AppText text={"Welcome"} customStyles={styles.title} />
    </Screen>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  title: {
    fontSize: 40,
  },
});
