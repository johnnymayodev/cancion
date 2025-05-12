import axios from "axios";
import * as cheerio from "cheerio";

import type { Song } from "#/types";

export const getSongFromAppleMusic = async (url: string): Promise<Song> => {
  if (!url || !url.includes("https://music.apple.com/")) {
    throw new Error("Invalid Apple Music URL");
  }

  const info = url.split("/album/")[1];

  const songNameRaw = info?.split("/")[0];
  const songName = songNameRaw
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!songName) {
    throw new Error("Invalid Apple Music URL");
  }

  const response = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  });

  const $ = cheerio.load(response.data);

  const albumHeader = $(".content-container .section .headings");

  // Extract information
  const artist = albumHeader.find(".headings__subtitles").text().trim();
  const album = albumHeader.find(".headings__title").text().trim();
  const metadata = albumHeader.find(".headings__metadata-bottom").text().trim();
  const [genre, releaseYear] = metadata.split("·").map((item) => item.trim());

  const song: Song = {
    AppleMusicURL: url,
    Title: songName,
    Artist: artist,
    Album: album,
    AlbumArtURL: "",
    Year: releaseYear ?? "",
    Genre: genre ?? "",
  };

  return song;
};
