import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screen/SplashScreen";
import HomeScreen from "../screen/HomeScreen";
import LibraryScreen from "../screen/LibraryScreen";
import FavoritesScreen from "../screen/FavoritesScreen";
import MostPlayerScreen from "../screen/MostPlayerScreen";
import PlayerListScreen from "../screen/PlayerListScreen";
import PlayerScreen from "../screen/PlayerScreen";
import RecentAddScreen from "../screen/RecentAddScreen";
import RecentPlayScreen from "../screen/RecentPlayScreen";

import FolderNavigator from "./FolderNavigator";
import SearchScreen from "../screen/SearchScreen";

const NativeStack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NativeStack.Screen name="Splash" component={SplashScreen} />
      <NativeStack.Screen name="Home" component={HomeScreen} />

      <NativeStack.Screen name="Library" component={LibraryScreen} />
      <NativeStack.Screen name="FolderNavigator" component={FolderNavigator} />

      <NativeStack.Screen name="Favorites" component={FavoritesScreen} />
      <NativeStack.Screen name="MostPlayer" component={MostPlayerScreen} />

      <NativeStack.Screen name="Player" component={PlayerScreen} />
      <NativeStack.Screen name="Playlist" component={PlayerListScreen} />

      <NativeStack.Screen name="RecentPlay" component={RecentPlayScreen} />
      <NativeStack.Screen name="RecentAdd" component={RecentAddScreen} />

      <NativeStack.Screen name="Search" component={SearchScreen} />
    </NativeStack.Navigator>
  );
}

export default RootNavigator;
