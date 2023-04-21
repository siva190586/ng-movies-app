export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres: genre[];
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
  status: string;
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

export interface genre {
  id: number;
  name: string;
}

export interface MovieVideoObj {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  key: string;
  site: string;
}

export interface MovieImages {
  id: number;
  backdrops: MovieBackdrops[];
}

export interface MovieBackdrops {
  file_path: string;
  height: number;
  width: number;
  aspect_ratio: number;
}

export interface MovieCredits {
  id: number;
  cast: {
    name: string;
    profile_path: string;
  }[];
}
