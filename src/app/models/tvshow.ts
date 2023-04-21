export interface TVShowObj {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
}

export interface tvProdComp {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export interface createdBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}
/*
export interface TVShow {
  adult: boolean;
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  created_by: createdBy[];
  vote_average: number;
  overview: string;
  first_air_date: string;
  last_air_date: string;
  production_companies: tvProdComp[];
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}
*/
export interface TVShow {
  backdrop_path: string;
  created_by: createdBy[];
  profile_path: string;
  episode_run_time: number[];
  first_air_date: string;
  genres: string[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: last_episode_to_air[];
  name: string;
  networks: tvProdComp[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: tvProdComp[];
  production_countries: string[];
  seasons: season[];
  spoken_languages: string[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface last_episode_to_air {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  season_number: number;
  poster_path: string;
}
