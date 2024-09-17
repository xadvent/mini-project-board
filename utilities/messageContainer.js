const { v4: uuidv4 } = require("uuid");

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
		id: uuidv4(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: newDate(),
		comments: [],
		id: uuidv4(),
	},
	{
		text: "Thanks for checking this out!",
		user: "Pierce Strutt",
		added: newDate(),
		comments: [
			{
				user: "Pierce Strutt",
				text: "I'm currently adding a way to comment!",
				added: newDate(),
			},
		],
		id: uuidv4(),
	},
];

class MessageContainer {
	constructor() {
		this.messages = messages;
	}

	addMessage(message) {
		message.id = uuidv4();
		message.added = newDate();
		message.comments = [];
		this.messages.push(message);
	}

	getMessage(user, text, added) {
		const message = this.messages.find((message) => {
			return (
				message.user == user &&
				message.text == text &&
				message.added == added
			);
		});
		return message;
	}

	getMessageById(id) {
		return this.messages.find((message) => message.id === id);
	}

	showMessages() {
		return this.messages;
	}
}

module.exports = new MessageContainer();
