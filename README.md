# Node.js User Authentication API

Waxaa ku jira authentication system oo dhammeystiran oo ku shaqeeya Node.js, Express, iyo MongoDB.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
PORT=3000
DB_URL=mongodb://localhost:27017/mynodejs
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

3. Run the server:
```bash
npm start
```

## API Endpoints

### Authentication

#### 1. Signup User
- **POST** `/signup`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "User created successfully",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "Image": "default_image_url"
    },
    "token": "jwt_token_here"
  }
}
```

#### 2. Login User
- **POST** `/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "Image": "default_image_url"
    },
    "token": "jwt_token_here"
  }
}
```

#### 3. Get User Profile (Protected Route)
- **GET** `/profile`
- **Headers:** `Authorization: Bearer your_jwt_token`
- **Response:**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "Image": "default_image_url"
    }
  }
}
```

### User Management

#### 4. Get All Users
- **GET** `/`

#### 5. Get User by ID
- **GET** `/:id`

#### 6. Update User
- **PATCH** `/:id`

#### 7. Delete User
- **DELETE** `/:id`

## Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token authentication
- ✅ Protected routes with middleware
- ✅ User registration and login
- ✅ Profile management
- ✅ MongoDB integration
- ✅ Error handling

## Security Features

- Passwords are hashed using bcryptjs
- JWT tokens for session management
- Protected routes require authentication
- Email uniqueness validation
- Input validation and error handling

## Usage Examples

### Using with Postman or similar tools:

1. **Signup:**
   - Method: POST
   - URL: `http://localhost:3000/signup`
   - Body (JSON): Include name, email, password, phone

2. **Login:**
   - Method: POST
   - URL: `http://localhost:3000/login`
   - Body (JSON): Include email and password

3. **Get Profile:**
   - Method: GET
   - URL: `http://localhost:3000/profile`
   - Headers: `Authorization: Bearer your_token_here`

### Using with JavaScript/Fetch:

```javascript
// Signup
const signup = async (userData) => {
  const response = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  return response.json();
};

// Login
const login = async (credentials) => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials)
  });
  return response.json();
};

// Get Profile (with token)
const getProfile = async (token) => {
  const response = await fetch('http://localhost:3000/profile', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.json();
};
``` 