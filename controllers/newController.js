const messageContainer = require("./messageContainer");

const get = (req, res) => {
	res.render("form");
};

const post = (req, res) => {
	req.body.added = new Date();
	console.log(req.body);
	messageContainer.addMessage(req.body);
	console.log(messageContainer.showMessages());

	res.redirect("/");
};

module.exports = {
	get,
	post,
};
