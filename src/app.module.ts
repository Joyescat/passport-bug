import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Strategy } from './strategy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Strategy],
})
export class AppModule {}
