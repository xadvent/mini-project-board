const options = {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
};

const newDate = () => {
	return new Date().toLocaleString("en-US", options);
};

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: newDate(),
		comments: [],
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: newDate(),
		comments: [],
	},
	{
		text: "Thanks for checking this out!",
		user: "Pierce Strutt",
		added: newDate(),
		comments: [],
	},
];

class MessageContainer {
	constructor() {
		this.messages = messages;
	}

	addMessage(message) {
		message.added = newDate();
		message.comments = [];
		this.messages.push(message);
	}

	getMessage(user, text, added) {
		this.messages.find((message) => {
			return (
				message.user == user &&
				message.text == text &&
				message.added == added
			);
		});
	}

	showMessages() {
		return this.messages;
	}
}

module.exports = new MessageContainer();
