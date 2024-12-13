import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AlchemyService } from './alchemy/alchemy.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly alchemyService: AlchemyService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('orders')
  getOrders() {
    return this.alchemyService.getHistory('0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55')
  }

}
