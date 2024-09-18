const messageContainer = require("../utilities/messageContainer");
const getProfile = require("../utilities/getProfile");

const get = async (req, res) => {
	const message = messageContainer.getMessageById(req.params.messageid);

	if (message) {
		const messageWithProfile =
			await getProfile.getMessageWithProfile(message);
		res.render("messageDetail", { message: messageWithProfile });
	} else {
		console.log("Message not found, try refreshing.");
		res.status(404).send("Message not found");
	}
};

const post = (req, res) => {
	const id = req.params.messageid;

	const message = messageContainer.getMessageById(id);
	if (!message) {
		return res.status(404).send("Message not found");
	}

	messageContainer.addComment(id, req.body);

	res.redirect("/message/" + id);
};

module.exports = {
	get,
	post,
};
