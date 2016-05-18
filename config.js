var config = {}

config.host = process.env.HOST || "https://ozdocdbacc.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "VDbcgltP8zLoOHpZK1MGwuj7vh4HAiqH72vlBHQwc7odmGmzQ1EQxHHg7nqCXmKdAxfgOgQmr2RXsrMbY0lY5Q==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;