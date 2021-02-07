import AlbumCategory from "./components/AlbumCategory";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  SearchScreen: undefined;
};

export type TabThreeParamList = {
  LibraryScreen: undefined;
};

export type TabFourParamList = {
  PrimiumScreen: undefined;
};

export type Album = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: number;
  imageUri: string;
  artistsHeadline: string;
}

export type Song = {
  id: string,
  imageUri: string,
  title: string,
  artist: string,
}