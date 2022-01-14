const validate = require("../helpers/validate");
const connection = require("../configDb");
const addpost = async (req, res) => {
  try {
    let { postdata } = req.body;
    let { postTitle, details } = postdata;
    const { error } = await validate({ postTitle, details });
    if (error) {
      res.status(400).send(error);
    }
    await connection.execute("addpost", { postTitle, details });
    res.status(201).send("post successfully added");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fetch = async (req, res) => {
  console.log("joan");

  try {
    let { recordset } = await connection.execute("fetchposts");
    res.status(201).send(recordset);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addpost,
  fetch,
};
