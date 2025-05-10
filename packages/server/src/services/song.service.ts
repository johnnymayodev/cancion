import prisma from "@/utilies/database";

export const getSong = async (id: string) => {
  const song = await prisma.song.findUnique({
    where: { ID: parseInt(id) },
  });
  return song;
};

export const getSongs = async () => {
  const songs = await prisma.song.findMany();
  return songs;
};

export default { getSong, getSongs };
