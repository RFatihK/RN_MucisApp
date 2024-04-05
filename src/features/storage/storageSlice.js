import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queue: [],
  shuffleMode: false,
  currentPlayingAudio: undefined,
  audioState: {
    state: "playing",
    isLooping: false,
    position: 0,
  },
  assets: [],
};

export const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    setQueue: (state, action) => {
      state.queue = action.payload;
    },
    setShuffleMode: (state, action) => {
      state.shuffleMode = action.payload;
    },
    setCurrentPlayingAudio: (state, action) => {
      state.currentPlayingAudio = action.payload;
    },
    setAudioState: (state, action) => {
      state.audioState = action.payload;
    },
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export const {
  setQueue,
  setShuffleMode,
  setCurrentPlayingAudio,
  setAudioState,
  setAssets,
} = queueSlice.actions;

export default queueSlice.reducer;
