const router = require("express").Router({ mergeParams: true });

const getAllPosts = require("../handlers/getAllPosts");
const getImages = require("../handlers/getImagesFromPrompt");
const postImage = require("../handlers/postImage");

router.get("/", getAllPosts);

router.get("/generate", getImages);

router.post("/image", postImage);

module.exports = router;
