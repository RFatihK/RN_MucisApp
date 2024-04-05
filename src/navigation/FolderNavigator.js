import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FolderScreen from "../screen/FoldersScreen";
import FolderSongsScreen from "../screen/FolderSongsScreen";

const NativeStack = createNativeStackNavigator();

function FolderNavigator() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NativeStack.Screen name="Folder" component={FolderScreen} />
      <NativeStack.Screen name="FolderSongs" component={FolderSongsScreen} />
    </NativeStack.Navigator>
  );
}

export default FolderNavigator;
