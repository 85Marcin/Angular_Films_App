export type Film = {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  title: string;
  popularity: number;
  poster_path: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  original_language: string;
  runtime: number;
  status: string;
  genres: Genre[];
};

export type FilmsDTO = {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type SimilarFilm = Pick<
  Film,
  'id' | 'backdrop_path' | 'title' | 'vote_average'
>;

export type SimilarFilmDTA = {
  page: number;
  results: SimilarFilm[];
  total_pages: number;
  total_results: number;
};
