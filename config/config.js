console.log("process.env.DB_PASSWORD:", process.env.DB_PASSWORD);
module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "Videogamelist",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
