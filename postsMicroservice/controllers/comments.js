const validate = require("../helpers/validate");
const connection = require("../configDb");
const addcomment = async (req, res) => {
  try {
    // let { postdata } = req.body;
    let { details, postId } = req.body;
    const { error } = await validate({ details, postId });
    if (error) {
      res.status(400).send(error);
    }
    await connection.execute("addcomment", { details, postId });
    res.status(201).send("post successfully added");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addcomment,
};
