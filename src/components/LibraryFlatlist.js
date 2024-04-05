import { FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const LibraryFlatlist = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={item.Image} style={styles.image} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      style={styles.flatlist}
    />
  );
};

export default LibraryFlatlist;

const styles = StyleSheet.create({
  flatlist: {
    
    flex: 1,
    width: "100%",
    alignSelf: "center",
    padding: 20,
  },
  imageContainer: {
    width: "50%",
    height: 200,
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
