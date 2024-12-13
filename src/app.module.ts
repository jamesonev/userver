import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlchemyService } from './alchemy/alchemy.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AlchemyService],
})
export class AppModule {}
