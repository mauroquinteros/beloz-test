export const configuration = () => ({
  environment: process.env.NODE_ENV,
  server: {
    port: parseInt(process.env.SERVER_PORT || '3000', 10),
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    name: process.env.DB_NAME || 'beloz_db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    synchronize: process.env.NODE_ENV === 'development',
  },
});
