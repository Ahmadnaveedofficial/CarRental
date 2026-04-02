# 🚗 CarRental

A full-stack **Car Rental Web Application** built on the **MERN Stack**. Users can browse available cars, make rental bookings, manage their reservations, and read blogs — all through a clean and responsive interface.

---

## 🌐 Live Demo

> 🔗 [car-rental-server-sigma-two.vercel.app](https://car-rental-server-sigma-two.vercel.app)

---

## 📁 Project Structure

```
CarRental/
├── client/          # Frontend (React.js)
└── server/          # Backend (Node.js / Express)
```

---

## ✨ Features

### 👤 Authentication & User Management
- 🔐 User **Login / Register** with **JWT** authentication
- 🍪 **Cookies** used for secure session management
- 🔑 **Google OAuth** — Sign in with Google
- 👤 **Edit Profile** — Update name, photo, and personal info
- 🔒 **Change Password** — Update password from account settings

### 🚘 Car Management (Admin)
- ➕ **Add Car** — Add new cars to the system
- ✅ **Available / Unavailable** — Toggle car availability status
- 🗑️ **Delete Car** — Remove a car from the system

### 📅 Booking System
- 📆 **Book a Car** — Make a booking on any date
- 📋 **Manage Bookings** — View and manage all reservations
- 🏨 **Reserve a Car** — Reserve a specific car

### 📝 Blog System
- ✍️ **Add Blog** — Publish a new blog post
- 🗑️ **Remove Blog** — Delete an existing blog post

### 🔍 Search & UI
- 🔎 **Search Bar** — Search functionality in the cars and features section
- 💳 **Car Cards** — Cars displayed in a clean responsive card layout
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop

### 🛡️ Security
- 🎟️ **JWT Token** — Secure API calls using JSON Web Tokens
- 🍪 **HTTP-only Cookies** — Tokens stored in cookies for better security
- 🔄 **Token Management** — Automatic handling of auth tokens

---

## 🛠️ Tech Stack

### Frontend (`/client`)
| Technology | Purpose |
|---|---|
| React.js | UI Library |
| Context API | Global state management |
| React Router | Client-side routing |
| Axios | HTTP requests |
| Google OAuth | Social login |
| CSS | Styling & responsive design |

### Backend (`/server`)
| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication & authorization |
| Bcrypt | Password hashing |
| Cookies | Session & token storage |
| Google OAuth 2.0 | Social authentication |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm or yarn
- Google OAuth credentials from [Google Cloud Console](https://console.cloud.google.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Ahmadnaveedofficial/CarRental.git
cd CarRental
```

---

### 2. Setup the Backend (Server)

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Start the server:

```bash
npm start
```

> Server will run at `http://localhost:5000`

---

### 3. Setup the Frontend (Client)

```bash
cd ../client
npm install
```

Create a `.env` file inside the `client/` folder:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

Start the client:

```bash
npm start
```

> App will run at `http://localhost:3000`

---

## 📦 Deployment

This project is deployed on **Vercel**.

- **Frontend** → Vercel Static Hosting
- **Backend** → Vercel Serverless Functions

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Ahmad Naveed**
- GitHub: [@Ahmadnaveedofficial](https://github.com/Ahmadnaveedofficial)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
