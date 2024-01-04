const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  return {
    connection: {
      connectionString: env("DATABASE_URL"),
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapiblog"),
      user: env("DATABASE_USERNAME", "db_user"),
      password: env("DATABASE_PASSWORD", "password"),
      ssl: false,
      schema: env("DATABASE_SCHEMA", "public"),
    },
    pool: {
      min: env.int("DATABASE_POOL_MIN", 2),
      max: env.int("DATABASE_POOL_MAX", 10),
    },
  };
};
