import { Injectable } from '@nestjs/common';
import { Movie } from './types/Movie';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'Ok';
  }

  getMovie(title: string): Movie {
    const string = title;
    return {
      Title: string,
      Actors: string,
      Plot: string,
      Poster: string,
      imdbRating: string,
      Response: string,
    };
  }
}
