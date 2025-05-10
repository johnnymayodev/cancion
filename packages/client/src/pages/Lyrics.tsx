import { useNavigate, useSearchParams } from "react-router";

// Components
import { Button } from "@/components/ui/button";
import { H1 } from "@/components/typography/H1";
import { H3 } from "@/components/typography/H3";
import { H4 } from "@/components/typography/H4";

function Lyrics() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const url = searchParams.get("url");

  console.log("URL:", url);

  const tempLyrics = [
    {
      time: 0,
      lyric: "Lorem ipsum dolor sit amet",
    },
    {
      time: 3,
      lyric: "Consectetur adipiscing elit",
    },
    {
      time: 7,
      lyric: "Sed do eiusmod tempor incididunt",
    },
    {
      time: 9,
      lyric: "Ut enim ad minim veniam",
    },
    {
      time: 11,
      lyric:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      time: 13,
      lyric:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      time: 17,
      lyric: "Excepteur sint occaecat cupidatat non proident",
    },
    {
      time: 21,
      lyric: "Sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      time: 25,
      lyric: "At vero eos et accusamus et iusto odio dignissimos",
    },
    {
      time: 29,
      lyric: "Ducimus qui blanditiis praesentium voluptatum deleniti",
    },
    {
      time: 33,
      lyric: "Atque corrupti quos dolores et quas molestias excepturi sint",
    },
  ];

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full blur-xl bg-cover bg-center bg-no-repeat bg-[url(https://cdn.musicboard.app/musicboard/media/BZ3gSx7VdAqjTAuOTgoc0w5RZYqxIAV8tbwhU42o1X19XJgS9SB5F3a3fMDBzhP4.webp)]"></div>
      <div className="relative flex flex-col gap-8">
        <div className="">
          <Button onClick={() => navigate("/")}>Home</Button>
          <H1 className="text-center">Saferea</H1>
          <H3 className="text-center">Bad Bunny</H3>
        </div>
        <div className="h-[640px] w-full no-scrollbar flex flex-col gap-16 overflow-y-scroll snap-y snap-mandatory relative">
          {tempLyrics.map((lyric, index) => (
            <div
              key={index}
              className="snap-center flex items-start gap-4"
            >
              <H4>
                {Math.floor(lyric.time / 60)}:
                {String(lyric.time % 60).padStart(2, "0")}
              </H4>
              <H1 key={index}>{lyric.lyric}</H1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Lyrics;
