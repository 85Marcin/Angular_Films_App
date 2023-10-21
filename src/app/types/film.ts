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
  name?: string;
};

export type FilmsDTO = {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
};
