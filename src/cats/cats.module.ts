import { Module } from '@nestjs/common';
import { ExceptionModule } from '../exception/exception.module';
import { CatsController } from './cats.controller';

@Module({
  imports: [ExceptionModule],
  controllers: [CatsController],
})
export class CatsModule {}
