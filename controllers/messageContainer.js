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
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: newDate(),
	},
	{
		text: "Thanks for checking this out!",
		user: "Pierce Strutt",
		added: newDate(),
	},
];

class MessageContainer {
	constructor() {
		this.messages = messages;
	}

	addMessage(message) {
		message.added = newDate();
		this.messages.push(message);
	}

	showMessages() {
		return this.messages;
	}
}

module.exports = new MessageContainer();
