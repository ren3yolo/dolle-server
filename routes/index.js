const router = require("express").Router({ mergeParams: true });

const getAllPosts = require("../handlers/getAllPosts");
const getImages = require("../handlers/getImagesFromPrompt");

router.get("/", getAllPosts);

router.get("/generate", getImages);

module.exports = router;
