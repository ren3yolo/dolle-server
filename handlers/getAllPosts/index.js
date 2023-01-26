module.exports = async (req, res, next) => {
  try {
    console.log(process.env.DOLLE_API_KEY);
    return res.status(200).send({ success: true, message: "ok" });
  } catch (error) {
    return res.status(500).send({ success: false, message: error });
  }
};
