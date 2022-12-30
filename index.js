const express = require("express");
const app = express();
const logger = require("./utils/log");
app.use(express.json());
const postRouter = require("./routers/post");
const port = process.env.PORT || 4000;

app.use("/post", postRouter);

app.listen(port, () => {
  logger.info(`App is Running on ${port} \n
on ${app.get("env")} Server
`);
});
