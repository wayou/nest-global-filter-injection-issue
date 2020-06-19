import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ExceptionModule } from './exception/exception.module';

@Module({
  imports: [ExceptionModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
