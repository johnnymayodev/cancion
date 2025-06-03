const URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://apicancion.johnnymayo.com";

const API_URL = `${URL}/api`;

export const getSongFromSongURL = async (songURL: string) => {
  console.log("USING:" + API_URL);

  const songURLDetails = songURL.split("album/")[1];

  const response = await fetch(`${API_URL}/song/url/${songURLDetails}`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  console.log("GET SONG RES:", data);

  return data;
};

export const getLyric = async (songUUID: string) => {
  console.log("USING:" + API_URL);

  const response = await fetch(`${API_URL}/lyric/${songUUID}`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  console.log("GET LYRIC RES:", data);

  return data;
};
