const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  // Signup user
  signup: async (req, res) => {
    try {
      console.log("REQ BODY ===>", req.body);
      const { name, phone, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          status: "failed",
          message: "User with this email already exists"
        });
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create new user
      const user = await new User({ 
        name, 
        phone, 
        email, 
        password: hashedPassword 
      }).save();

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );

      res.status(201).json({
        status: "success",
        message: "User created successfully",
        data: {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            Image: user.Image
          },
          token
        }
      });
    } catch (e) {
      res.status(500).json({
        status: "failed",
        message: e.toString()
      });
    }
  },

  // Login user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          status: "failed",
          message: "Invalid email or password"
        });
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          status: "failed",
          message: "Invalid email or password"
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );

      res.status(200).json({
        status: "success",
        message: "Login successful",
        data: {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            Image: user.Image
          },
          token
        }
      });
    } catch (e) {
      res.status(500).json({
        status: "failed",
        message: e.toString()
      });
    }
  },

  // Create user (legacy function - now use signup)
  createuser: async (req, res) => {
    try {
      console.log("REQ BODY ===>", req.body);
      const { name, phone, email } = req.body;

      const user = await new User({ name, phone, email }).save();

      res.status(200).json({
        status: "successfully",
        data: user
      });
    } catch (e) {
      res.status(401).json({
        status: "failed",
        Message: e.toString()
      });
    }
  },

  // Get all users
  getusers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({
        status: "successfully",
        data: users
      });
    } catch (e) {
      res.status(401).json({
        status: "failed",
        Message: e.toString()
      });
    }
  },

  // Get single user by ID
  getuser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({
          status: "failed",
          Message: "User not found"
        });
      }
      res.status(200).json({
        status: "successfully",
        data: "successfully fetched",
      });
    } catch (e) {
      res.status(401).json({
        status: "failed",
        Message: e.toString()
      });
    }
  },

  // Delete user by ID
  Delateuser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({
          status: "failed",
          Message: "User not found"
        });
      }
      res.status(200).json({
        status: "successfully ",
        data: "successfully deleted"
      });
    } catch (e) {
      res.status(401).json({
        status: "failed",
        Message: e.toString()
      });
    }
  },

  // Update user by IDt
  updateuser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }

      );
      if (!user) {
        return res.status(404).json({
          status: "failed",
          Message: "User not found"
        });
      }
      res.status(200).json({
        status: "successfully ", 
        data: "successfully updated"
      });
    } catch (e) {
      res.status(401).json({
        status: "failed",
        Message: e.toString()
      });
    }
  },

  // Get current user profile
  getProfile: async (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        data: {
          user: {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            phone: req.user.phone,
            Image: req.user.Image
          }
        }
      });
    } catch (e) {
      res.status(500).json({
        status: "failed",
        message: e.toString()
      });
    }
  }

};
