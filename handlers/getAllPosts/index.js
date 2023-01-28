const { connect, getClient } = require("../../utils/dbHelper");

module.exports = async (req, res, next) => {
  const client = getClient();
  try {
    const posts = [];
    const feed = await connect(client, "feed");
    const cursor = await feed.find({});
    while (await cursor.hasNext()) {
      const post = await cursor.next();
      posts.push(post);
    }
    return res.status(200).send({ posts });
  } catch (error) {
    return res.status(500).send({ success: false, message: error });
  } finally {
    await client.close();
  }
};
