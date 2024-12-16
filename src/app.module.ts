import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AlchemyService } from './alchemy/alchemy.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AlchemyService],
})
export class AppModule {}
