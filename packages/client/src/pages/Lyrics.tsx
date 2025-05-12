import { useNavigate, useSearchParams } from "react-router";
import { useEffect, useState } from "react";

import { getLyric, getSongFromSongURL } from "@/query";

// Components
import { Button } from "@/components/ui/button";
import { H1 } from "@/components/typography/H1";
import { H3 } from "@/components/typography/H3";
import { H4 } from "@/components/typography/H4";
import { P } from "@/components/typography/P";

import type { Song } from "#/types";

function Lyrics() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<Song>();
  const [lyrics, setLyrics] =
    useState<{ lineIndex: number; header: boolean; line: string }[]>();

  const url = searchParams.get("url");

  if (!url) {
    return (
      <div className="flex flex-col gap-4">
        <Button onClick={() => navigate("/")}>Home</Button>
        <P>No URL provided</P>
      </div>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSongFromSongURL(url);
      const lyricResponse = await getLyric(response.UUID);

      setData(response);
      setLyrics(JSON.parse(lyricResponse.Content));
    };

    fetchData();
  }, [url]);

  if (!data || !lyrics) {
    return (
      <div className="flex flex-col gap-4">
        <P>Loading...</P>
      </div>
    );
  }

  const songName = data?.Title;
  const artistName = data?.Artist;
  const albumName = data?.Album;
  const albumArtURL = data?.AlbumArtURL;

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full blur-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${albumArtURL})` }}
      ></div>
      <div className="relative flex flex-col text-white/75 h-dvh">
        <div className="flex flex-col gap-8">
          <Button onClick={() => navigate("/")}>Home</Button>
          <div className="">
            <H1 className="text-center">{songName}</H1>
            <H3 className="text-center ">{artistName}</H3>
            <H4 className="text-center ">{albumName}</H4>
          </div>
        </div>
        <div className="mt-8 h-2/3 flex flex-col overflow-y-scroll snap-y snap-mandatory no-scrollbar ">
          {lyrics ? (
            lyrics.map(
              (
                lyric: { lineIndex: number; header: boolean; line: string },
                index: number,
              ) => {
                if (lyric.header) {
                  return (
                    <H1
                      key={index}
                      className="mt-16"
                    >
                      {lyric.line.replace(/\[|\]/g, "")}
                    </H1>
                  );
                }
                return (
                  <H3
                    key={index}
                    className="mt-8"
                  >
                    {lyric.line}
                  </H3>
                );
              },
            )
          ) : (
            <div className="text-center">
              <H3>No lyrics available</H3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Lyrics;
