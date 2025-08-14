MyCLOUD – Storage as a Service

MyCLOUD is a cloud storage web application built with Node.js, Express.js, and EJS that allows users to create accounts, sign in, upload files, and securely manage their data. It integrates Cloudinary for file storage and uses MongoDB (Mongoose) for database management.

Features

User Account Management

Create account, Sign in, Sign out

Passwords securely hashed with bcrypt

JWT tokens stored in cookies for authentication and session management

Secure Authentication & Authorization

Custom authMiddleware compares JWT tokens from cookies to validate user sessions

Only authenticated users can access their files and metadata

File Uploads via Cloudinary

Upload files through drag-and-drop or browse button

File metadata stored in MongoDB, linked to user ID for privacy

Uses multer and multer-storage to handle file uploads

Frontend with EJS and Tailwind CSS

Clean, responsive UI built using Tailwind CSS

Error responses displayed as pop-up notifications using JavaScript (instead of raw JSON responses)

Robust Error Handling

All routes wrapped with try-catch blocks to ensure proper error reporting

Middleware for authentication and request validation

API Integration

Additional APIs integrated for enhanced functionality

Routes designed to handle unexpected cases gracefully

Tech Stack

Backend: Node.js, Express.js

Frontend: EJS Templates, Tailwind CSS

Database: MongoDB (Mongoose ODM)

Cloud Storage: Cloudinary (via API)

Authentication: JWT (stored in cookies), bcrypt password hashing

Middleware: Express pre-built middleware + custom middleware (authMiddleware)

File Handling: Multer, Multer Storage

Database Design

Users Collection

Stores user details and credentials (hashed passwords)

Files Collection

Stores file metadata and references user IDs to maintain strict authorization

How It Works

User registers → password hashed using bcrypt → stored in MongoDB.

User logs in → JWT token generated → stored in cookies → session maintained.

File upload → handled by Multer → stored on Cloudinary → metadata saved in MongoDB with user ID.

Authentication middleware ensures only valid users can access their files.

Error handling middleware ensures clean feedback with pop-ups on the frontend.

Folder Structure
MyCLOUD/
├── public/            # Static files (CSS, JS, Images)
├── views/             # EJS templates for frontend
├── routes/            # Express routes (auth, upload, etc.)
├── middleware/        # Custom middleware (authMiddleware, etc.)
├── models/            # Mongoose schemas (User, File)
├── app.js             # Main Express application
├── package.json       
├── .env               # Environment variables (not committed)
└── README.md

Installation

Clone the repository

git clone https://github.com/your-username/MyCLOUD.git
cd MyCLOUD


Install dependencies

npm install


Set up environment variables
Create a .env file and add:

MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret


Run the application

npm start


Visit http://localhost:3000 to view the app.

Project Highlights

Drag-and-drop file upload for seamless user experience.

Middleware-driven architecture for clean code organization.

Pop-up based error handling for better UI feedback.

Complete session management using JWT stored in cookies.

Fully modular route structure ensuring maintainability.

Future Improvements

Adding file sharing with role-based access

Implementing email verification and password reset

Adding a dashboard with storage analytics

Supporting larger file uploads with chunking

License

This project is licensed under the MIT License.
