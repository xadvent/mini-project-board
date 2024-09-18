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

module.exports = {
	get,
};
