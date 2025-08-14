<div align="center">
<br />
<img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="25px">
<h1>MyCLOUD – Storage as a Service ☁️</h1>
<p>A secure and robust cloud storage web application built with Node.js, Express.js, and MongoDB. Upload, manage, and access your files from anywhere with a clean, intuitive interface.</p>
<br />
</div>

### Features
👤 User Account Management: Create accounts, sign in, and sign out with ease.

##🔒 Secure Authentication & Authorization:

Passwords are securely hashed using bcrypt.

JWT tokens stored in cookies for persistent sessions.

Custom middleware ensures only authenticated users can access their data.

☁️ File Uploads via Cloudinary:

Seamlessly upload files with a drag-and-drop interface or a traditional browse button.

File metadata is stored in MongoDB and linked to user accounts for privacy.

🎨 Frontend with EJS and Tailwind CSS:

A clean, modern, and responsive UI built with Tailwind CSS.

User-friendly pop-up notifications for errors and success messages.

⚙️ Robust Error Handling:

All routes are wrapped in try-catch blocks for graceful error handling.

Custom middleware for validating requests and handling errors ensures a smooth user experience.

🛠️ Tech Stack
Backend: Node.js, Express.js

Frontend: EJS Templates, Tailwind CSS

Database: MongoDB (with Mongoose ODM)

Cloud Storage: Cloudinary

Authentication: JWT (JSON Web Tokens), bcrypt

File Handling: Multer

🚀 How It Works
User Registration: A new user signs up. Their password is automatically hashed with bcrypt and stored securely in the MongoDB Users collection.

User Login: The user logs in with their credentials. A JWT token is generated and stored as a cookie in their browser to maintain the session.

File Upload: The authenticated user uploads a file. Multer handles the file stream, which is then sent to Cloudinary for storage. The file's metadata (URL, name, type) is saved in the MongoDB Files collection, linked by the user's ID.

Data Access: The authMiddleware verifies the JWT token on every request to a protected route, ensuring that users can only access their own files.

Error Handling: If an error occurs, the middleware catches it and sends a user-friendly pop-up notification to the frontend instead of a raw JSON response.

📁 Folder Structure
Here's a look at the project's structure:

MyCLOUD/
├── public/          # Static assets (CSS, client-side JS, images)
├── views/           # EJS templates for the UI
├── routes/          # Express route definitions (auth, upload)
├── middleware/      # Custom middleware (authMiddleware)
├── models/          # Mongoose schemas (User, File)
├── app.js           # Main Express application file
├── package.json     # Project dependencies
├── .env             # Environment variables (not committed to Git)
└── README.md
🌟 Project Highlights
Drag-and-Drop Uploads: A modern and seamless user experience for uploading files.

Middleware-Driven Architecture: Clean, organized, and maintainable code.

User-Friendly Feedback: Pop-up based error handling for better UI communication.

Complete Session Management: Secure and persistent sessions using JWT stored in cookies.

Modular and Scalable: A fully modular route structure that is easy to extend.

🔮 Future Improvements
Here are some features planned for the future:

[ ] File Sharing: Implement file sharing with other users using role-based access (view/edit).

[ ] Email & Password: Add email verification and a "Forgot Password" feature.

[ ] User Dashboard: Create a dashboard with storage usage analytics.

[ ] Large File Support: Implement file chunking to support larger file uploads.

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.

<div align="center">
<p>Made with ❤️ by [Your Name]</p>
</div>
