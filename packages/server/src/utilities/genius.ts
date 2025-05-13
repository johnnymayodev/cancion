import axios from "axios";
import * as cheerio from "cheerio";

import type { GeniusOptions, Lyric } from "#/types";

const getTitle = (title: string, artist: string) =>
  `${title} ${artist}`
    .toLowerCase()
    .replace(/ *\([^)]*\) */g, "")
    .replace(/ *\[[^\]]*]/, "")
    .replace(/feat.|ft./g, "")
    .replace(/\s+/g, " ")
    .trim();

const searchUrl = "https://api.genius.com/search?q=";

export const getLyricsFromGenius = async (
  options: GeniusOptions,
  SongUUID: string,
): Promise<Lyric> => {
  const { apiKey, title, artist, optimizeQuery, authHeader } = options;

  const song = optimizeQuery ? getTitle(title, artist) : `${title} ${artist}`;
  const reqUrl = `${searchUrl}${encodeURIComponent(song)}`;
  const headers = { Authorization: `Bearer ${apiKey}` };

  let { data } = await axios.get(
    authHeader ? reqUrl : `${reqUrl}&access_token=${apiKey}`,
    authHeader ? { headers } : undefined,
  );

  const results = data.response.hits.map(({ result }: { result: any }) => ({
    id: result.id,
    title: result.full_title,
    albumArt: result.song_art_image_url,
    url: result.url,
  }));

  const { data: lyricsData } = await axios.get(results[0].url);
  const $ = cheerio.load(lyricsData);

  let lyrics = $("div.lyrics").text().trim();

  if (!lyrics) {
    lyrics = $('div[class^="Lyrics__Container"]')
      .map((i, elem) => {
        const html = $(elem).html();
        if (!html) return "";
        return html
          .replace(/<br>/g, "\n")
          .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, "");
      })
      .get() // Convert cheerio object to a plain array of strings.
      .join("")
      .trim();
  }

  const lyricsArray = lyrics
    .split("\n")
    .map((line: string) => line.trim())
    .filter((line: string) => line.length > 0)
    .slice(1);
  const lyricsObject = lyricsArray.map((line: string, index: number) => ({
    lineIndex: index,
    header: line.match(/\[(.*?)\]/) ? true : false,
    line: line,
  }));

  const stringifiedLyricsObject = JSON.stringify(lyricsObject, null, 2);

  return {
    SongUUID,
    Content: stringifiedLyricsObject,
  };
};

export const getAlbumArtURLFromGenius = async (options: GeniusOptions) => {
  const { apiKey, title, artist, optimizeQuery, authHeader } = options;

  const song = optimizeQuery ? getTitle(title, artist) : `${title} ${artist}`;
  const reqUrl = `${searchUrl}${encodeURIComponent(song)}`;
  const headers = { Authorization: `Bearer ${apiKey}` };

  let { data } = await axios.get(
    authHeader ? reqUrl : `${reqUrl}&access_token=${apiKey}`,
    authHeader ? { headers } : undefined,
  );

  const results = data.response.hits.map(({ result }: { result: any }) => ({
    id: result.id,
    title: result.full_title,
    albumArt: result.song_art_image_url,
    url: result.url,
  }));

  return results[0].albumArt;
};
