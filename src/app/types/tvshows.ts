import { Film } from './film';

export type TVShow = {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  name: string;
  popularity: number;
  poster_path: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  first_air_date: string;
};

export type TVShowsDTO = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

export function mapToFilms(tvshows: TVShow[]): Film[] {
  return tvshows.map((tvshow: TVShow) => {
    return { ...tvshow, title: tvshow.name };
  });
}