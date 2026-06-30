# 🤖 FabTwin AI

FabTwin AI is an AI-powered manufacturing management platform that streamlines project management, document organization, analytics, and AI-assisted support. The application integrates Google Gemini AI to provide intelligent responses and insights while offering a modern dashboard for managing manufacturing-related data.

## 🚀 Features

🔐 User Authentication
- User Registration
- Secure Login
- Logout
- Protected Routes

📊 Dashboard
- Live statistics
- Total Projects
- Total Documents
- Total Users
- AI Accuracy Overview

📁 Project Hub
- Create Projects
- View Projects
- Delete Projects
- Search Projects

📄 Document Vault
- Upload Document Records
- View Documents
- Delete Documents
- Search Documents

🤖 AI Copilot
- Powered by Google Gemini AI
- Real-time AI Chat
- Markdown Response Support

📈 Analytics
- Manufacturing Analytics Dashboard

👤 User Profile
- View Logged-in User Details
- Activity Summary

⚙️ Settings
- User Settings Interface

🛠️ Tech Stack

Frontend
- React.js
- Tailwind CSS
- React Router
- Axios
- React Icons
- React Markdown

Backend
- Flask
- Flask-CORS
- Python

Database
- MongoDB

AI Integration
- Google Gemini API

📂 Project Structure

```
FabTwin-AI
│
├── backend
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── app.py
│   └── config.py
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```
⚡Installation
## Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/FabTwin-AI.git
```
## Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
Backend runs on
```
http://127.0.0.1:5000
```
Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on
```
http://localhost:5173
```
🔑 Environment Variables
Create a `.env` file inside the backend folder.
```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```
# 🔮 Future Enhancements
- Edit Project
- Edit Document
- File Upload Support
- Charts & Graphs
- AI Chat History
- Deployment using Vercel & Render
