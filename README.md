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

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

# Commentary

## Framework

## Development process
Now we have a server up and running and so it's time to add the functionality we need for an exchange backend. Centralized exchanges have a database layer, but because our exchange isn't actually holding any assets (everything onchain), we instead need to make the backend query the different available chains to retrieve the data required for a typical user profile.

To start, let's add an endpoint that returns the different assets in a user's wallet. We'll assume the frontend call to the user's wallet's getAddresses() function returns an array of addresses. The frontend would then query our server to find the contents of those addresses.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

