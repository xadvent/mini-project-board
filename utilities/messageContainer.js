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
		text: "Click on a post 😎",
		user: "Amando",
		added: newDate(),
		comments: [
			{
				user: "Pierce Strutt",
				text: "You can add onto messages using the comments!",
				added: newDate(),
			},
		],
		id: uuidv4(),
	},
	{
		text: "Thanks for checking out my project!",
		user: "Pierce Strutt",
		added: newDate(),
		comments: [
			{
				user: "Pierce Strutt",
				text: "This project was made to demonstrate basic backend programming skills! If you haven't, check out the README :)",
				added: newDate(),
			},
			{
				user: "Pierce Strutt",
				text: "I still intend to polish this site up, so feel free to check it out again in the near future!",
				added: newDate(),
			},
		],
		id: uuidv4(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: newDate(),
		comments: [],
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

		const newMessages = [message].concat(this.messages);
		this.messages = newMessages;
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
		const sortedMessages = this.messages.sort((a, b) => b.added - a.added);
		return sortedMessages;
	}

	addComment(id, comment) {
		const message = this.getMessageById(id);

		if (!message) {
			console.error(`Message with id ${id} not found`);
			return;
		}

		const user = comment.user;
		const text = comment.text;

		message.comments.push({
			user,
			text,
			added: newDate(),
		});
	}
}

module.exports = new MessageContainer();
