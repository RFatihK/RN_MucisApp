import * as MusicLibrary from "expo-music-library";
import { useEffect, useState } from "react";
import { UseDispatch, useSelector } from "react-redux";
import { setAssets } from "../features/storage/storageSlice";

const useMusicLibrary = (sortBy = MusicLibrary.SortBy.default) => {
  const [lastMusicAssets, setLastMusicAssets] = useState({});
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const assets = useSelector((state) => state.queue.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    getAudios();
  }, []);
  const getAudios = async () => {
    const results = await MusicLibrary.getAssetsAsync({
      first: 20,
      mediaType: MusicLibrary.MediaType.audio,
      sortBy: sortBy,
    });
    dispatch(setAssets(results.assets));
    setLastMusicAssets(results.endCursor);
  };
  const loadMore = async () => {
    setIsLoadingMore(true);
    const results = await MusicLibrary.getAssetsAsync({
      first: 20,
      mediaType: MusicLibrary.MediaType.audio,
      sortBy: sortBy,
      after: lastMusicAssets,
    });
    const newAssets = [...assets, ...results];
    dispatch(setAssets(newAssets));
    setLastMusicAssets(results.endCursor);
    setIsLoadingMore(false);
  };
  return { assets, setIsLoadingMore, loadMore };
};

export default useMusicLibrary;
