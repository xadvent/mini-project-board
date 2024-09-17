const messageContainer = require("../utilities/messageContainer");

const get = (req, res) => {
	const correctMessage = messageContainer.getMessageById(
		req.params.messageid,
	);

	if (correctMessage) {
		res.render("messageDetail", { message: correctMessage });
	} else {
		console.log("Message not found");
		res.status(404).send("Message not found");
	}
};

module.exports = {
	get,
};
