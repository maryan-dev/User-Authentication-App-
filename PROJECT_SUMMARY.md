# 🚀 Complete User Authentication System

Waxaa ku jira Node.js backend iyo Flutter frontend oo dhammeystiran oo ku shaqeeya authentication system.

## 📁 Project Structure

```
mynodejs/
├── sever.js                 # Main server file
├── package.json            # Node.js dependencies
├── .env                    # Environment variables
├── src/
│   ├── controllers/
│   │   └── user.js         # User controller (signup, login, CRUD)
│   │   └── auth.js         # JWT authentication middleware
│   ├── models/
│   │   └── user.js         # User model with password field
│   ├── routers/
│   │   └── user.js         # API routes
│   └── middleware/
│       └── auth.js         # JWT authentication middleware
├── flutter_app/
│   ├── lib/
│   │   ├── main.dart       # Main Flutter app
│   │   └── services/
│   │       └── auth_service.dart  # API service functions
│   └── pubspec.yaml        # Flutter dependencies
├── test-api.js             # Node.js API test file
├── test_flutter_api.dart   # Flutter API test file
└── README.md               # Main project documentation
```

## 🔧 Backend Features (Node.js)

### Authentication
- ✅ User signup with password hashing
- ✅ User login with JWT token
- ✅ Protected routes with middleware
- ✅ Password validation and hashing with bcryptjs

### User Management
- ✅ Create user (signup)
- ✅ Get all users
- ✅ Get user by ID
- ✅ Update user
- ✅ Delete user
- ✅ Get user profile (protected)

### Security
- ✅ JWT token authentication
- ✅ Password hashing with bcryptjs
- ✅ CORS enabled for Flutter
- ✅ Input validation
- ✅ Error handling

## 📱 Frontend Features (Flutter)

### Screens
- ✅ Login screen with form validation
- ✅ Signup screen with form validation
- ✅ Home screen with user profile
- ✅ All users list with pull-to-refresh

### Features
- ✅ Beautiful Material Design UI
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling with SnackBar
- ✅ Local storage for user data
- ✅ JWT token management
- ✅ Responsive design

## 🚀 How to Run

### 1. Start Node.js Backend
```bash
cd mynodejs
npm install
npm start
```

### 2. Start Flutter App
```bash
cd flutter_app
flutter pub get
flutter run
```

## 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/signup` | User registration | No |
| POST | `/api/login` | User login | No |
| GET | `/api/profile` | Get user profile | Yes |
| GET | `/api/` | Get all users | No |
| GET | `/api/:id` | Get user by ID | No |
| PATCH | `/api/:id` | Update user | No |
| DELETE | `/api/:id` | Delete user | No |

## 🔐 Authentication Flow

1. **Signup:** User creates account → Password hashed → JWT token returned
2. **Login:** User enters credentials → Password verified → JWT token returned
3. **Protected Routes:** Token sent in Authorization header → Verified by middleware
4. **Logout:** Token cleared from local storage

## 📱 Flutter App Flow

1. **Auth Screen:** Login/Signup form with validation
2. **Home Screen:** User profile card + All users list
3. **Navigation:** Automatic after successful login
4. **Logout:** Clear data and return to auth screen

## 🛠️ Dependencies

### Backend (Node.js)
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `dotenv` - Environment variables
- `nodemon` - Development server

### Frontend (Flutter)
- `http` - API requests
- `shared_preferences` - Local storage
- `flutter` - Core framework

## 🔧 Configuration

### Environment Variables (.env)
```
PORT=3000
DB_URL=mongodb://localhost:27017/mynodejs
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### Flutter API URL
For mobile testing, update `lib/services/auth_service.dart`:
```dart
// Change localhost to your computer's IP
static const String baseUrl = 'http://192.168.1.100:3000/api';
```

## 🧪 Testing

### Test Node.js API
```bash
node test-api.js
```

### Test Flutter API
```bash
dart test_flutter_api.dart
```

## 🎨 UI Features

- Modern Material Design
- Form validation with error messages
- Loading indicators
- Pull-to-refresh functionality
- Responsive layout
- User avatars and profile cards
- Clean navigation

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected routes
- Input validation
- Error handling
- CORS configuration

## 📊 Database Schema

```javascript
User {
  name: String (required)
  email: String (required, unique)
  password: String (required, hashed)
  phone: String (optional)
  Image: String (default placeholder)
  timestamps: true
}
```

## 🚀 Deployment Ready

The system is ready for deployment with:
- Environment variable configuration
- Error handling
- Input validation
- Security best practices
- Clean code structure

## 📝 Next Steps

1. Add password reset functionality
2. Implement email verification
3. Add user roles and permissions
4. Create admin panel
5. Add file upload for user images
6. Implement real-time notifications
7. Add search and filtering
8. Create mobile app builds 