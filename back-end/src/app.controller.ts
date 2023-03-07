import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Movie } from './types/Movie';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  getStatus(): string {
    return this.appService.getStatus();
  }

  @Get('movie/:title')
  getMovie(@Param('title') title: string): Movie {
    return this.appService.getMovie(title);
  }
}
