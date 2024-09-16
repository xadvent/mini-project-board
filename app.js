const express = require("express");
const path = require("node:path");
const app = express();

const homeRouter = require("./routes/homeRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.use("/", homeRouter);

app.listen(3000, () => {
	console.log("Express server started at localhost:3000");
});
