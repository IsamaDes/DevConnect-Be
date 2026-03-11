# DevConnect Backend

This is the **backend API** for the [DevConnect](https://github.com/IsamaDes/DevConnect-Fe) platform — a developer networking application that enables users to connect, collaborate on projects, and grow their professional network.

The backend is built with **Express.js**, **TypeScript**, and **MongoDB**, using **HTTP-only cookies** for secure authentication and token management.

---

 Features

- JWT Authentication** (Access + Refresh Tokens stored in cookies)
- User Registration & Login**
- Token Refresh & Secure Logout**
- Role-Based Authorization**
- Project Management (CRUD)**
- TypeScript for type safety**
- Modular architecture** (controllers, services, repositories)
- Error handling middleware**
- Input validation**

---

Project Structure

src/
│
├── config
| └── db.ts
|
├── controllers
│ ├── authController.ts
│ └── errorController.ts
| └── userController.ts
|
├── middleware
│ ├── authMiddleware.ts
│ └── errorMiddleware.ts
| └── roleMiddleware.ts
|
├── models
│ ├── BlacklistedToken.ts
│ └── project.ts
| └── user.ts
|
├── repositories
│ ├── projectRepositories.ts
│ └── userRepository.ts
|
├── routes
│ ├── authRoutes.ts
│ └── projectRoutes.ts
| └── userRoutes.ts
|
├── services/auth
│ ├── loginService.ts
│ └── logOutService.ts
| └── refreshTokenService.ts
| └── registerService.ts
├── types/
│ └── index.tsx
├── utils/
│ └── cookieStore.ts
| └── tokenUtils.ts
| └── validation.ts
└── server.tsx

---

## ⚙️ Tech Stack

| Category        | Technologies                                               |
| --------------- | ---------------------------------------------------------- |
| **Runtime**     | Node.js                                                    |
| **Framework**   | Express.js                                                 |
| **Language**    | TypeScript                                                 |
| **Database**    | MongoDB (Mongoose)                                         |
| **Auth**        | JWT + HTTP-only Cookies                                    |
| **Validation**  | Zod / Joi                                                  |
| **Environment** | dotenv                                                     |
| **Logging**     | morgan                                                     |
| **Frontend**    | [DevConnect-Fe](https://github.com/IsamaDes/DevConnect-Fe) |

---

 API Overview

### Auth Routes (`/api/auth`)

| Method | Endpoint         | Description                       |
| ------ | ---------------- | --------------------------------- |
| POST   | `/register`      | Register new user                 |
| POST   | `/login`         | Authenticate user and set cookies |
| POST   | `/refresh-token` | Refresh access token              |
| POST   | `/logout`        | Log out user and clear cookies    |

### User Routes (`/api/users`)

| Method | Endpoint | Description                |
| ------ | -------- | -------------------------- |
| GET    | `/`      | Get all users (Admin only) |
| GET    | `/:id`   | Get user by ID             |

### Project Routes (`/api/projects`)

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| GET    | `/`      | Get all projects   |
| POST   | `/`      | Create new project |
| PATCH  | `/:id`   | Update project     |
| DELETE | `/:id`   | Delete project     |

---

Authentication Flow

1. **User logs in / registers** → server sends JWT **access** and **refresh** tokens as **HTTP-only cookies**.
2. **Subsequent requests** include cookies automatically.
3. **Access token expires** → client silently requests `/refresh-token` to get a new one.
4. **Logout** → both tokens are invalidated (blacklisted) and cookies cleared.

---

Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/DevConnect-Be.git
cd DevConnect-Be
```

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
COOKIE_SECRET=your_cookie_secret
CLIENT_URL=https://devconnect-fe.vercel.app
NODE_ENV=development

4. Run the server
npm run dev

Server will start on http://localhost:5000

Scripts
Command Description
npm run dev Run server in development mode (ts-node-dev)
npm run build Compile TypeScript to JavaScript
npm start Start server from build directory

Frontend Integration
Frontend repo: DevConnect-Fe
Ensure your CORS configuration allows:
origin: process.env.CLIENT_URL,
credentials: true

so cookies are sent securely between frontend and backend.

License

This project is licensed under the MIT License.
