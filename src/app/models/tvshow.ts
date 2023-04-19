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

export interface TVShow {
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
