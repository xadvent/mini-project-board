const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
	{
		text: "Thanks for checking this out!",
		user: "Pierce Strutt",
		added: new Date(),
	},
];

class MessageContainer {
	constructor() {
		this.messages = messages;
	}

	addMessage(message) {
		this.messages.push(message);
	}

	showMessages() {
		return this.messages;
	}
}

module.exports = new MessageContainer();
