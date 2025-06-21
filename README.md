# 🛡️ Role-Based Authorization API (Node.js + MongoDB)

This project implements a secure user authentication and **role-based authorization system** using **Node.js**, **Express**, and **MongoDB**. It uses **JWT** tokens for authentication and enforces access control based on user roles (e.g., admin, user).

---

## 🚀 Features

- User Signup & Login
- JWT-based Authentication
- Role-Based Access Control (RBAC)
- Protected Routes
- MongoDB Integration

---

## 🛠️ Tech Stack

-**Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT (JSON Web Token)
- **Environment**: dotenv

---
## 🧪 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/maaz81/Role-Based-Authorization.git
cd Role-Based-Authorization
```

### 2. **Install Dependencies**

```
npm install
```

### 3. **Set Up Environment Variables**

-**Create a .env file in the root directory and add the following values:
```bash
PORT=7001
JWT_SECRET=my-secret-key
CONNECTION_STRING=mongodb://localhost:27017/Role_Auth
```

### 4. **Run the Server**

```
npm start
```

or
```
npm run dev
```
