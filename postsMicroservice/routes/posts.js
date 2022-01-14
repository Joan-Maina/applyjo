const express = require("express");
const router = express.Router();

const { addpost, fetch } = require("../controllers/posts");

router.post("/add", addpost);
router.post("/fetch", fetch);

module.exports = router;
