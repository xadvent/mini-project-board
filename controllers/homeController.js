const messageContainer = require("../utilities/messageContainer");
const getProfile = require("../utilities/getProfile");

const index = async (req, res) => {
	const updatedMessages = await getProfile.getMessagesWithProfiles();
	res.render("index", { messages: updatedMessages });
};

module.exports = { index };
