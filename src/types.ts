export interface MovieProps {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface FavoritesProps {
  title: string;
  image: string;
  release_date: string;
  vote_average: number;
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
