## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# run docker
$ docker compose up -d

# or only mysql
$ docker compose up -d mysql
```

# Migration

```bash
# Generate migration
yarn typeorm migration:generate src/migrations/create-task -d src/datasource.ts

# Run migration
yarn typeorm migration:run -d src/datasource.ts
```

