import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './http-excption.filter';

@Module({
  providers: [HttpExceptionFilter],
  exports: [HttpExceptionFilter],
})
export class ExceptionModule {}
