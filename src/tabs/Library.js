import { ActivityIndicator, View } from "react-native";
import React from "react";
import useMusicLibrary from "../hooks/useMusicLibrary";
import SongList from "../components/SongList";
import { colors } from "../theme/colors";

const Library = () => {
  const { assets, isLoadingMore, loadMore } = useMusicLibrary();
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <SongList
        songs={assets}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
        ListFooterComponenet={() =>
          isLoadingMore ? (
            <ActivityIndicator size={"large"} color={colors.white} />
          ) : null
        }
      />
    </View>
  );
};

export default Library;
