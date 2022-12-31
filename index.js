const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const logger = require("./utils/log");
const postRouter = require("./routers/post");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/post", postRouter);

app.listen(port, () => {
  logger.info(`App is Running on ${port} \n
on ${app.get("env")} Server
`);
});
