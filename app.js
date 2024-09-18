const express = require("express");
const app = express();
const path = require("node:path");

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

const homeRouter = require("./routes/homeRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

app.use("/", homeRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter);

app.listen(port, () => {
	console.log("Express server started at localhost:" + port);
});
