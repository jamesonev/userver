import { Injectable } from '@nestjs/common';
import { Alchemy, AssetTransfersCategory, Network } from 'alchemy-sdk';

@Injectable()
export class AlchemyService {
    private readonly client: Alchemy;

  constructor() {
    const config = {
      apiKey: process.env.ALCHEMY_API_KEY,
      network: Network.ETH_MAINNET,
    };
    this.client = new Alchemy(config);
  }

  async getHistory(toAddress: string){
    return await this.client.core.getAssetTransfers({
        fromBlock: "0x0",
        fromAddress: "0x0000000000000000000000000000000000000000",
        toAddress: toAddress,
        excludeZeroValue: true,
        category: [AssetTransfersCategory.ERC20],
      });
  }
  
}
