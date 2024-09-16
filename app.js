const express = require("express");
const app = express();
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

const homeRouter = require("./routes/homeRouter");
const newRouter = require("./routes/newRouter");

app.use("/", homeRouter);
app.use("/new", newRouter);

app.listen(3000, () => {
	console.log("Express server started at localhost:3000");
});
