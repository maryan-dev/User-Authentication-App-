# Flutter Authentication App

Flutter app oo ku shaqeeya Node.js backend-ka authentication system-ka.

## Features

- ✅ User Signup
- ✅ User Login  
- ✅ User Profile Display
- ✅ All Users List
- ✅ JWT Token Authentication
- ✅ Local Storage for User Data
- ✅ Beautiful UI with Material Design

## Installation

1. **Install Flutter dependencies:**
```bash
cd flutter_app
flutter pub get
```

2. **Make sure Node.js backend is running:**
```bash
# In the parent directory (mynodejs)
npm start
```

3. **Run Flutter app:**
```bash
flutter run
```

## API Endpoints Used

The app connects to these Node.js backend endpoints:

- `POST /api/signup` - User registration
- `POST /api/login` - User login
- `GET /api/profile` - Get user profile (protected)
- `GET /api/` - Get all users

## Configuration

### For Mobile Testing

If you're testing on a mobile device, update the base URL in `lib/services/auth_service.dart`:

```dart
// Change from localhost to your computer's IP address
static const String baseUrl = 'http://192.168.1.100:3000/api';
```

### For Web Testing

For web testing, keep the localhost URL:

```dart
static const String baseUrl = 'http://localhost:3000/api';
```

## App Structure

```
lib/
├── main.dart              # Main app entry point
└── services/
    └── auth_service.dart  # API service functions
```

## Usage

1. **Signup:** Fill in name, email, password, and phone (optional)
2. **Login:** Enter email and password
3. **Home Screen:** View your profile and all registered users
4. **Logout:** Tap the logout icon in the app bar

## Dependencies

- `http: ^1.1.0` - For API requests
- `shared_preferences: ^2.2.2` - For local storage
- `flutter` - Core Flutter framework

## Troubleshooting

### Connection Issues
- Make sure Node.js backend is running on port 3000
- Check if the IP address is correct for mobile testing
- Verify CORS is enabled in the backend

### Build Issues
- Run `flutter clean` and `flutter pub get`
- Make sure Flutter SDK is up to date

## Screenshots

The app includes:
- Login/Signup screen with form validation
- Home screen with user profile card
- List of all registered users
- Pull-to-refresh functionality
- Error handling with SnackBar messages
