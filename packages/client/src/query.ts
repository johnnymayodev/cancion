import { log } from "#/log";

const URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/"
    : "https://cancion.johnnymayo.com/";

const API_URL = `${URL}api`;

export const getSongFromSongURL = async (songURL: string) => {
  const songURLDetails = songURL.split("album/")[1];

  log("info", `Getting song from ${songURLDetails}...`);

  const response = await fetch(`${API_URL}/song/url/${songURLDetails}`, {
    method: "GET",
  });

  const data = await response.json();

  log("info", `Song fetched from ${songURLDetails}...`);

  return data;
};

export const getLyric = async (songUUID: string) => {
  log("info", `Getting lyric from ${songUUID}...`);

  const response = await fetch(`${API_URL}/lyric/${songUUID}`, {
    method: "GET",
  });

  const data = await response.json();

  log("info", `Lyric fetched from ${songUUID}...`);

  return data;
};
