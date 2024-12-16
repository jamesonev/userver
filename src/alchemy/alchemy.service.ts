import { Injectable } from '@nestjs/common';
import {
  Alchemy,
  AssetTransfersCategory,
  AssetTransfersResponse,
  GetTokensForOwnerResponse,
  Network,
} from 'alchemy-sdk';
@Injectable()
export class AlchemyService {
  private readonly client: Alchemy;
  // we need contract addresses to filter for uAsset contracts. For now, I've only implemented uXRP 0x2615a94df961278DcbC41Fb0a54fEc5f10a693aE To add others, just add their contract address to the list.

  constructor() {
    const config = {
      apiKey: process.env.ALCHEMY_API_KEY,
      network: Network.BASE_MAINNET,
    };
    this.client = new Alchemy(config);
  }

  async getHistory(toAddress: string): Promise<AssetTransfersResponse> {
    return await this.client.core.getAssetTransfers({
      toAddress: toAddress,
      excludeZeroValue: true,
      contractAddresses: ['0x2615a94df961278DcbC41Fb0a54fEc5f10a693aE'],
      category: [AssetTransfersCategory.ERC20],
    });
    // do post processing on results e.g. check return type for errors vs <AssetTransfersResponse> and convert or drop rawBalance/decimals math, etc.
  }

  async getBalances(address: string): Promise<GetTokensForOwnerResponse> {
    return await this.client.core.getTokensForOwner(address, {
      contractAddresses: ['0x2615a94df961278DcbC41Fb0a54fEc5f10a693aE'],
    });
  }

  async getPrices() {
    return await this.client.prices.getTokenPriceBySymbol(['ETH', 'XRP'])
  }
}
