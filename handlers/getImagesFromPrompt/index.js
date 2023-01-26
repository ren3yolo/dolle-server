const { OpenAIApi, Configuration } = require("openai");

module.exports = async (req, res, next) => {
  try {
    const openai = new OpenAIApi(
      new Configuration({
        apiKey: process.env.DOLLE_API_KEY,
      })
    );

    const response = await openai.createImage({
      prompt: req.query.prompt,
      n: 2,
      size: "256x256",
    });

    return res.status(200).send({ success: true, message: response.data.data });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, message: error });
  }
};
