const { getClient, connect } = require("../../utils/dbHelper");

module.exports = async (req, res, next) => {
  try {
    const client = getClient();
    await connect(client, "images");

    return res.status(200).send({ success: true, message: "image uploaded" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, message: error.message });
  }
};
