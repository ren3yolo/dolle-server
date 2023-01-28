const { getClient, connect } = require("../../utils/dbHelper");

module.exports = async (req, res, next) => {
  const client = getClient();
  try {
    const feed = await connect(client, "feed");

    const { b64_json, prompt } = req.body;
    const movie = await feed.insertOne({ b64_json, prompt });

    return res.status(200).send({ success: true, message: "image uploaded" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, message: error.message });
  } finally {
    await client.close();
  }
};
