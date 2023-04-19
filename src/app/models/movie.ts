export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: prodComp[];
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieObj {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface prodComp {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}
