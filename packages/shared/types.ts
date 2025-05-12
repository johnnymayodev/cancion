// model Song {
// 	ID            Int    @id @default(autoincrement())
// 	UUID          String @unique
// 	AppleMusicURL String
// 	Title         String
// 	Artist        String
// 	Album         String
// 	AlbumArtURL   String
// 	Year          String
// 	Genre         String
//   }

export type Song = {
  AppleMusicURL: string;
  Title: string;
  Artist: string;
  Album: string;
  AlbumArtURL: string;
  Year: string;
  Genre: string;
};

export type Lyric = {
  SongUUID: string;
  Content: string;
};

export type GeniusOptions = {
  apiKey: string;
  title: string;
  artist: string;
  optimizeQuery: boolean;
  authHeader: boolean;
};
