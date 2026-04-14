import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { QueryDto } from './dto/query.dto';
import { QueryService } from './query.service';
import { Public } from '../auth/api-key.guard';

@Controller()
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  // GET /health — public, no API key required
  @Public()
  @Get('health')
  health() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  // POST /query
  @Post('query')
  @HttpCode(HttpStatus.OK)
  async query(@Body() dto: QueryDto) {
    // TODO: Call queryService.query(dto)
    return { message: 'Not implemented yet' };
  }
}
