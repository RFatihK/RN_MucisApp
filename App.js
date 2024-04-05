import { Audio } from "expo-av";
import { useEffect } from "react";
import Main from "./src/Main";
import * as MusicLibrary from "expo-music-library";
import { Provider } from "react-redux";
import { store } from "./src/app/store"

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      await requestPermission();
      await audioSetup();
    };

    fetchData();
  }, []);

  const requestPermission = async () => {
    let permissions = await MusicLibrary.requestPermissionsAsync();
    while (!permissions.granted) {
      permissions = await MusicLibrary.requestPermissionsAsync();
    }
  };
  const audioSetup = async () => {
    Audio.setAudioModeAsync({
      playThroughEarpieceAndroid: true,
      staysActiveInBackground: true,
    });
  };

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
