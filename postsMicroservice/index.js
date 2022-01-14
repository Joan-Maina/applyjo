const express = require("express");
const cors = require("cors");
const PORT = 9090;
const app = express();
const postsRoute = require("./routes/posts");
const tasksRoute = require("./routes/comments");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/posts", postsRoute);
app.use("/comments", tasksRoute);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
