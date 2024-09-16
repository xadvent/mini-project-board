const messageContainer = require("./messageContainer");

const get = (req, res) => {
	res.render("form");
};

const post = (req, res) => {
	if (!req.body.user || !req.body.text) {
		res.redirect("/new");
		return;
	}

	messageContainer.addMessage(req.body);
	console.log(req.body.user + " has added a new message.");
	res.redirect("/");
};

module.exports = {
	get,
	post,
};
