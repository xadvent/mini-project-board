# Mini Message Board

This is a simple **Mini Message Board** application built using **Node.js**, **Express.js**, and **EJS**. The project allows users to post messages, add comments to messages, and view all messages on the board.

## Features

- View all posted messages.
- Post a new message to the message board.
- Add comments to any message.
- Dynamic rendering of profiles using DiceBear avatars.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework used for handling routing and server-side logic.
- **EJS (Embedded JavaScript Templates)**: Template engine for rendering dynamic content on the front-end.
- **DiceBear Avatars**: Used to generate user profile avatars dynamically based on the username.
- **UUID**: Generates unique IDs for each message.
- **CSS**: Basic styling for the message board.

## Deployment

The application has been deployed at:
[Mini Message Board](https://mini-message-board-ps.adaptable.app/)

## Usage

1. Navigate to the homepage to view existing messages.
2. Click **New Message** to add a message.
3. Click any message to view comments and or leave your own comment.
4. Avatars are dynamically generated based on the username.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mini-message-board.git
   cd mini-message-board
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm run dev
   ```

   Navigate to `http://localhost:3000` to interact with the message board.

## Project Structure

```plaintext
├── public/              # Static assets (CSS, images, etc.)
├── views/               # EJS templates (HTML views)
│   ├── index.ejs        # Homepage view
│   ├── messageDetail.ejs# Detailed message view
│   ├── newMessage.ejs   # Form to submit a new message
├── utilities/
│   ├── messageContainer.js # Logic for storing and managing messages
│   ├── getProfile.js    # Generates avatars using DiceBear
├── routes/
│   ├── index.js         # Main routes for the app
├── app.js               # Main app file
├── package.json         # Project configuration and dependencies
└── README.md            # Project documentation (this file)
```

## API Routes

- **GET** `/` - Display the message board.
- **GET** `/message/:messageid` - View the details of a specific message.
- **POST** `/message/:id` - Add a comment to a specific message.
- **GET** `/new` - Render the form to submit a new message.
- **POST** `/new` - Submit a new message to the board.

## Future Improvements

- Add user authentication for posting messages and comments.
- Implement message and comment editing features.
- Add validation for user input.
- Improve the UI/UX design.

## License

This project is open source and available under the [MIT License](LICENSE).
