// Movie Categories
export type Categories = "Populares" | "Favoritas";

// Movie interface
export interface MovieProps {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

// Favorite Movies interfaces
export interface FavoritesProps {
  title: string;
  image: string;
  release_date: string;
  vote_average: number;
}

// Sidebar
export interface SideBarProps {
  populares: any;
  favorites: any;
}

//Hero
export interface HeroProps {
  title: string;
  isOriginal: boolean;
  link: string;
}
