const { MongoClient, ServerApiVersion } = require("mongodb");

function getClient() {
  const client = new MongoClient(process.env.DB_CONN_URI, {
    serverApi: ServerApiVersion.v1,
  });

  return client;
}

async function connect(client, collection) {
  try {
    await client.connect();

    const database = client.db(process.env.DB_NAME);
    await database.command({ ping: 1 });
    const feed = database.collection(collection);
    return feed;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getClient, connect };
