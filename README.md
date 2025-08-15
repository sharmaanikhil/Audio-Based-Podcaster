# Podcaster - Podcast Platform

[![Frontend](https://img.shields.io/badge/frontend-React-blue)](https://benevolent-biscotti-f0fdd0.netlify.app/)  
[![Backend](https://img.shields.io/badge/backend-Node.js-green)](https://9284086b-4755-4764-bbeb-bbd392908e88-00-2b1j8iv1ngukh.pike.replit.dev/)  

---

## Project Overview

**Podcaster** is a full-stack podcast platform that enables users to create, listen, and explore podcasts seamlessly.  
Users can upload and manage their own podcasts, browse categories, listen to episodes with an integrated audio player, and manage their profiles. The system supports rich media uploads with images and audio files and provides a smooth user experience through its modern React frontend and Node.js backend.

The platform aims to bring podcasters and listeners together on a single easy-to-use platform with robust backend API integration.

---

## Live Demo

- **Frontend:** [https://benevolent-biscotti-f0fdd0.netlify.app/](https://benevolent-biscotti-f0fdd0.netlify.app/)  
- **Backend API:** [https://9284086b-4755-4764-bbeb-bbd392908e88-00-2b1j8iv1ngukh.pike.replit.dev/](https://9284086b-4755-4764-bbeb-bbd392908e88-00-2b1j8iv1ngukh.pike.replit.dev/)  

---

## Features

### User
- Secure user authentication with signup and login
- Create new podcasts by uploading audio and image files
- Browse podcasts by categories
- Play podcasts with integrated audio player
- View detailed descriptions of podcasts
- Manage personal profile and view user’s uploaded podcasts

### Platform
- RESTful API for podcast creation, retrieval, and user management
- File upload handling for images and audio
- Cross-origin resource sharing (CORS) configured for secure frontend-backend communication
- State management using Redux for smooth and responsive UI experience

---

## Tech Stack

| Layer          | Technology                                |
|----------------|------------------------------------------|
| Frontend       | React, Vite, Tailwind CSS                 |
| Backend        | Node.js, Express.js, MongoDB, Mongoose   |
| Authentication | JWT, Cookie-based sessions                |
| APIs           | Axios                                    |
| State Management | Redux Toolkit                            |
| Hosting        | Netlify (Frontend), Replit (Backend)     |

---

## Architecture Overview

- **React frontend** communicates with a **Node.js/Express** backend via REST APIs.
- Backend handles user authentication, podcast and category data, and file uploads.
- MongoDB database used for storing users, podcasts, and categories.
- CORS configured to allow requests only from allowed frontend URLs.
- Audio files served from backend as static files.

---

## Installation & Local Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account (if running locally)
- Git

### Clone Repository

git clone https://github.com/your-username/podcaster.git
cd podcaster

### Backend Setup

cd backend
npm install

- Create a `.env` file in the backend root with:
PORT=1000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

- Start backend server:
npm run start


### Frontend Setup

Open a new terminal window:
cd ../frontend
npm install
npm run dev

- Frontend defaults to `http://localhost:5173` (Vite default).

---

## Deployment

- **Frontend** deployed on Netlify:  
  [https://benevolent-biscotti-f0fdd0.netlify.app/](https://benevolent-biscotti-f0fdd0.netlify.app/)

- **Backend** deployed on Replit:  
  [https://9284086b-4755-4764-bbeb-bbd392908e88-00-2b1j8iv1ngukh.pike.replit.dev/](https://9284086b-4755-4764-bbeb-bbd392908e88-00-2b1j8iv1ngukh.pike.replit.dev/)

### Important Deployment Notes

- Backend CORS is configured to allow requests from localhost and Netlify URLs.
- Ensure MongoDB Atlas allows connections from your backend host.
- If frontend or backend URLs change, remember to update CORS settings and frontend API endpoints.

---

## Folder Structure
backend
|- controllers/
|- models/
|- routes/
|- middleware/
|- server.js
/frontend
|- src/
|- components/
|- pages/
|- store/
|- App.jsx
|- vite.config.js
|- package.json

---

## Future Improvements

- Add user subscription and podcast commenting
- Implement search functionality across podcasts and categories
- Enhance audio player with playlist and speed control features
- Integrate social sharing for podcast episodes
- Support multi-language and accessibility options

---

## License

[MIT License](LICENSE)

---
