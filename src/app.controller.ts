import { Controller, Get, Param } from '@nestjs/common';
import { AlchemyService } from './alchemy/alchemy.service';

@Controller()
export class AppController {
  constructor(private readonly alchemyService: AlchemyService) {}

  @Get('history/:address')
  getOrders(@Param('address') address: string) {
    return this.alchemyService.getHistory(address);
  }

  @Get('balances/:address')
  getBalances(@Param('address') address: string) {
    return this.alchemyService.getBalances(address);
  }
}
