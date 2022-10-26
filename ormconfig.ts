export default 
  {
    type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  logging: false,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 2000,
  entities: [`src/entity/**/*.ts`],
  migrations: [`src/database/migration/**/*.ts`],
  seeds: [`src/database/seeds/**/*.ts`],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/database/migration',
  },
    name: 'development',
    database: process.env.POSTGRES_DB || 'node_project',
    synchronize: true,
  }
;
