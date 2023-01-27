const { MongoClient, ServerApiVersion, GridFSBucket } = require("mongodb");

function getClient() {
  const client = new MongoClient(process.env.DB_CONN_URI, {
    serverApi: ServerApiVersion.v1,
  });

  return client;
}

async function connect(client, collection) {
  try {
    await client.connect();
    await client.db(process.env.DB_NAME).command({ ping: 1 });
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

async function getBucket(client) {
  try {
    const db = client.db(process.env.DB_NAME);
    const bucket = new GridFSBucket(db);
  } catch (error) {}
}

module.exports = { getClient, connect };
