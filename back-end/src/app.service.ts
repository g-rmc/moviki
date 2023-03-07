import { Injectable } from '@nestjs/common';
import { Movie } from './types/Movie';
import axios from 'axios';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'Ok';
  }

  async getMovie(title: string): Promise<Movie> {
    let filteredMovieObj: Movie;
    const searchData = title.replace(' ', '+');
    try {
      const fullMovieObj = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.OMDBAPI_KEY}&t=${searchData}`,
      );
      filteredMovieObj = {
        Title: fullMovieObj.data.Title,
        Actors: fullMovieObj.data.Actors,
        Plot: fullMovieObj.data.Plot,
        Poster: fullMovieObj.data.Poster,
        imdbRating: fullMovieObj.data.imdbRating,
        Response: fullMovieObj.data.Response,
        Error: fullMovieObj.data.Error,
      };
      return filteredMovieObj;
    } catch (error) {
      throw new Error();
    }
  }
}
