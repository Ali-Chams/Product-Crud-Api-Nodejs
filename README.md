# Product Catalog API

A simple Node.js + Express backend with MongoDB for managing product listings.

## Features

- RESTful API with CRUD operations
- MongoDB Atlas for persistent storage
- Image handling (static files)
- Pagination support

## Technologies

- Node.js
- Express.js
- MongoDB (Atlas)
- MongoDB Native Driver
- Body-Parser

🛠 Project Setup Instructions

Follow these steps to run this project locally with your own MongoDB database.
📦 Prerequisites

    Node.js installed

    A MongoDB Atlas account (free tier works)

⚙️ 1. Clone the repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

📁 2. Install dependencies

npm install

🔐 3. Set up your MongoDB Database

    Go to MongoDB Atlas and create a free cluster.

    Create a Database User with a username and password.

    In the cluster dashboard, click Connect > Drivers > Node.js, and copy the connection string.
    It will look like this:


mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority

Replace <username> and <password> with your actual database user credentials.

Add the name of your database at the end, e.g.:

    mongodb+srv://yourUser:yourPass@cluster0.mongodb.net/shop?retryWrites=true&w=majority

🧪 4. Create a .env file

Create a .env file in the root of your project:

MONGODB_URI=mongodb+srv://yourUser:yourPass@cluster0.mongodb.net/shop?retryWrites=true&w=majority

Note: This file will not be committed to Git if .gitignore is set up correctly.
▶️ 5. Start the server

npm start

The server will run on http://localhost:3100
