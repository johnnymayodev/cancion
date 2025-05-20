const URL = "http://localhost:3002";

const API_URL = `${URL}/api`;

export const getSongFromSongURL = async (songURL: string) => {
  const songURLDetails = songURL.split("album/")[1];

  const response = await fetch(`${API_URL}/song/url/${songURLDetails}`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};

export const getLyric = async (songUUID: string) => {
  const response = await fetch(`${API_URL}/lyric/${songUUID}`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};
