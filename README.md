According to [the doc](https://docs.nestjs.com/exception-filters#exception-filters-1),

if using `app.useGlobalFilters(new HttpExceptionFilter());` to register the filter, the filter cannot be injected directly, but:

```ts
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
```

however, in this repo I still can inject the filter normally:

[src/cats/cats.controller.ts](./src/cats/cats.controller.ts)

```diff
import { Controller, ForbiddenException, Get } from '@nestjs/common';
import { HttpExceptionFilter } from '../exception/http-excption.filter';

@Controller('cats')
export class CatsController {
+  constructor(private readonly filter: HttpExceptionFilter) {
+    console.log('look, the filter been injected', this.filter);
+  }
  @Get()
  async create() {
    throw new ForbiddenException();
  }
}

```
