export interface MovieProps {
  title: string;
  poster_path: string;
  release_date: string;
}

export interface FavoritesProps {
  title: string;
  image: string;
}

export type Categories = "Populares" | "Favoritas";

export interface SideBarProps {
  populares: any;
  favorites: any;
}

export interface HeroProps {
  title: string;
  isOriginal: boolean;
  link: string;
}
