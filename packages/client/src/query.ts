const URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/"
    : "https://cancion.johnnymayo.com/";

const API_URL = `${URL}api`;

console.log("[INFO]", `Using ${API_URL}...`);

export const getSongFromSongURL = async (songURL: string) => {
  const songURLDetails = songURL.split("album/")[1];

  console.log("[INFO]", `Getting song from ${songURLDetails}...`);

  const response = await fetch(`${API_URL}/song/url/${songURLDetails}`, {
    method: "GET",
  });

  const data = await response.json();

  console.log("[INFO]", `Song fetched from ${songURLDetails}...`);

  return data;
};

export const getLyric = async (songUUID: string) => {
  console.log("[INFO]", `Getting lyric from ${songUUID}...`);

  const response = await fetch(`${API_URL}/lyric/${songUUID}`, {
    method: "GET",
  });

  const data = await response.json();

  console.log("[INFO]", `Lyric fetched from ${songUUID}...`);

  return data;
};
