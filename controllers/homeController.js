const messageContainer = require("./messageContainer");

const getSVG = async (userName) => {
	const { createAvatar } = await import("@dicebear/core");
	const { lorelei } = await import("@dicebear/collection");

	const avatar = createAvatar(lorelei, {
		seed: userName,
	});
	const svg = avatar.toDataUri();

	return svg;
};

const getMessagesWithProfiles = async () => {
	const updatedMessages = await Promise.all(
		messageContainer.showMessages().map(async (message) => {
			const profile = await getSVG(message.user);
			return {
				...message,
				profile,
			};
		}),
	);
	return updatedMessages;
};

const index = async (req, res) => {
	const updatedMessages = await getMessagesWithProfiles();
	res.render("index", { messages: updatedMessages });
};

module.exports = { index };
