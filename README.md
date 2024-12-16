# Commentary

## Assignment

Context: Universal is on a mission to close the gap between a CEX and a DEX. We built wrapped assets to bridge the liquidity gap. Now, we want to combine that with the speed, performance, and execution of a CEX.

Task: Architect and implement a backend for a new exchange that uses [Uniswap X](https://docs.uniswap.org/contracts/uniswapx/overview) as the settlement layer and [uAssets](https://docs.universalassets.xyz/universal-protocol/developers/uasset)  as assets on exchange.

You are not expected to build an _entire exchange_. Feel free to focus on the parts you think best showcase your abilities and relevance. We will assume every candidate is using AI.

## Initial Planning

I know that Universal does not want to be in the business of custodying assets, and that precludes many functions of a CEX. Therefore, building endpoints that provide the same data a CEX would but delegating the actual custody of assets, order signing, etc. to the frontend seemed like the correct approach. 

## Framework

I chose Nest because it's a framework that I am familiar with and is easy to deploy and scale. It's abstraction of services makes updates simple and makes it easy to focus on exactly the problem you are trying to solve.

## Development process
Now we have a server up and running and so it's time to add the functionality we need for an exchange backend. Centralized exchanges have a database layer, but because our exchange isn't actually holding any assets (everything onchain), we instead need to make the backend query the different available chains to retrieve the data required for a typical user profile.

To start, let's add an endpoint that returns the different assets in a user's wallet. We'll assume the frontend call to the user's wallet's getAddresses() function returns an array of addresses. The frontend would then query our server to find the contents of those addresses.

The first step was to figure out where the assets we are interacting with are. uAsset has several contracts listed as deployed on Base, and so I used basescan to find one them and find an address that has an active uAsset balance. The address I found and used for development is 0x4389a1daD94287357e59a2e888905FeF2f213bEb. Once I had an address, I modified the alchemy config to match the params needed (contract for uXRP on Base with address 0x2615a94df961278DcbC41Fb0a54fEc5f10a693aE).

I wanted to include price data, since users love it and it will help build a Dutch Order for trading. Also, if view the commit that added the price feature, you can see how easy it is to add an endpoint using this framework, since Nest handles all the routing internals and just invokes the Alchemy Service which has already been configured and instantiated. 

With that, users can plug in their wallet and view their uAsset (uXRP) balances, order history, and can use the provided information to create a Dutch Order.

# Getting Started

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Interacting with the Server
Create a `.env` file and add your Alchemy API key. It should look like this `ALCHEMY_API_KEY=xxxx`.

Once the server is running, you can interact with the API using curl.
```
curl localhost:3000/balances/0x4389a1daD94287357e59a2e888905FeF2f213bEb
```
the `balances` can be replaced with `history`. Any address can be provided, as the API passes the address to alchemy and returns the provided response.

Price information is available at `/prices`.

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
