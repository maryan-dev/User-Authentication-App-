// Test file for User Authentication API
// Run this file with: node test-api.js

const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000';

// Test data
const testUser = {
  name: "Test User",
  email: "test@example.com",
  password: "password123",
  phone: "+1234567890"
};

let authToken = '';

// Test Signup
async function testSignup() {
  console.log('🧪 Testing Signup...');
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testUser)
    });
    
    const data = await response.json();
    console.log('Signup Response:', data);
    
    if (data.status === 'success') {
      authToken = data.data.token;
      console.log('✅ Signup successful! Token saved.');
    }
  } catch (error) {
    console.error('❌ Signup failed:', error.message);
  }
}

// Test Login
async function testLogin() {
  console.log('\n🧪 Testing Login...');
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: testUser.email,
        password: testUser.password
      })
    });
    
    const data = await response.json();
    console.log('Login Response:', data);
    
    if (data.status === 'success') {
      authToken = data.data.token;
      console.log('✅ Login successful! Token saved.');
    }
  } catch (error) {
    console.error('❌ Login failed:', error.message);
  }
}

// Test Get Profile (Protected Route)
async function testGetProfile() {
  console.log('\n🧪 Testing Get Profile...');
  if (!authToken) {
    console.log('❌ No auth token available. Please login first.');
    return;
  }
  
  try {
    const response = await fetch(`${BASE_URL}/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    
    const data = await response.json();
    console.log('Profile Response:', data);
    
    if (data.status === 'success') {
      console.log('✅ Profile retrieved successfully!');
    }
  } catch (error) {
    console.error('❌ Get Profile failed:', error.message);
  }
}

// Test Get All Users
async function testGetAllUsers() {
  console.log('\n🧪 Testing Get All Users...');
  try {
    const response = await fetch(`${BASE_URL}/`);
    const data = await response.json();
    console.log('All Users Response:', data);
    
    if (data.status === 'successfully') {
      console.log('✅ All users retrieved successfully!');
    }
  } catch (error) {
    console.error('❌ Get All Users failed:', error.message);
  }
}

// Run all tests
async function runTests() {
  console.log('🚀 Starting API Tests...\n');
  
  await testSignup();
  await testLogin();
  await testGetProfile();
  await testGetAllUsers();
  
  console.log('\n✨ All tests completed!');
}

// Check if server is running
async function checkServer() {
  try {
    const response = await fetch(`${BASE_URL}/`);
    if (response.ok) {
      console.log('✅ Server is running!');
      return true;
    }
  } catch (error) {
    console.log('❌ Server is not running. Please start the server with: npm start');
    return false;
  }
}

// Main execution
async function main() {
  const serverRunning = await checkServer();
  if (serverRunning) {
    await runTests();
  }
}

main().catch(console.error); 