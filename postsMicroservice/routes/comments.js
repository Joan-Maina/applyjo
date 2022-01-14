const express = require("express");
const router = express.Router();

const { addcomment } = require("../controllers/comments");

router.post("/add", addcomment);
// router.post("/fetch", fetch);

module.exports = router;
