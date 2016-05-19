var config = {}

config.host = process.env.HOST || "[DocumentDB URI]";
config.authKey = process.env.AUTH_KEY || "[DocumentDB Primary Key]";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
