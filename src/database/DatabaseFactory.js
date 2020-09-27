const mongodb = require("./Mongodb");

async function DatabaseFactory(databaseType) {
     switch (databaseType) {
          case DatabaseType.MONGODB:
               return await mongodb.open();
          case DatabaseType.MYSQL:
               console.log("create connection to MYSQL");
               break;
          case DatabaseType.SQL_SERVER:
               console.log("create connection to SQL_SERVER");
               break;
          case DatabaseType.ORACLE:
               console.log("create connection to ORACLE");
               break;
          default:
               console.log("database not found");
               break;
     }
}

const DatabaseType = {
     MYSQL: "MYSQL",
     SQL_SERVER: "SQL_SERVER",
     ORACLE: "ORACLE",
     MONGODB: "MONGODB",
};

module.exports = { DatabaseFactory, DatabaseType };
