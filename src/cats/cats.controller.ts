import { Controller, ForbiddenException, Get } from '@nestjs/common';
import { HttpExceptionFilter } from '../exception/http-excption.filter';

@Controller('cats')
export class CatsController {
  constructor(private readonly filter: HttpExceptionFilter) {
    console.log('look, the filter been injected', this.filter);
  }
  @Get()
  async create() {
    throw new ForbiddenException();
  }
}
